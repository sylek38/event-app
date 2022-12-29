import {
	CustomJWTPayload,
	generateToken,
	RequestWithCookies,
	verifyToken,
} from "./verify/verifyToken";
import { Request, Response } from "express";
import User from "../models/User";
import jwtDecode, { JwtPayload as Other } from "jwt-decode";

const router = require("express").Router();
const bcrypt = require("bcrypt");

interface RegisterRequest extends Request {
	name: string;
	surname: string;
	email: string;
	password: string;
	rememberMe?: boolean;
}

interface LoginRequest extends Request {
	email: string;
	password: string;
}

router.post("/register", async (req: RegisterRequest, res: Response) => {
	const { name, surname, email, password, bio, profilePic } = req.body;

	// TODO: Uncomment for final version
	// if (!password.test(passwordRegex)) {
	// 	return res
	// 		.status(400)
	// 		.json({ error: "Password does not meet the requirements" });
	// }

	const isEmailTaken = await User.findOne({ email });

	if (isEmailTaken)
		return res.status(400).json({
			error: "Email already exists",
		});

	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(password, salt);

		const newUser = new User({
			name,
			surname,
			email,
			password: hashedPass,
			bio,
			profilePic,
		});

		const user = await newUser.save();

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/login", async (req: LoginRequest, res: Response) => {
	const { email, password, rememberMe } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		// it will be "Wrong credentials" but for testing I specified it
		return res.status(400).json("Wrong email");
	}

	const validated = await bcrypt.compare(password, user.password);

	if (!validated) {
		return res.status(400).json("wrong password");
	}

	try {
		const expirationTime = rememberMe
			? +!process.env.LONG_TTL
			: +!process.env.TOKEN_TTL;

		const accessToken = rememberMe
			? generateToken(user.id, "token", expirationTime)
			: generateToken(user.id);

		const refreshToken = rememberMe
			? generateToken(user.id, "refresh", expirationTime)
			: generateToken(user.id);

		// TODO: figure out why cookie doesn't save in browser when has maxAge/expires
		res.cookie("token", accessToken, {
			// maxAge: +expirationTime,
			// maxAge: expirationTime,
			// expires: (new Date(Date.now() + expirationTime)).to,
			httpOnly: true,
		});

		res.cookie("refreshToken", refreshToken, {
			// maxAge: +expirationTime,
			// expires: new Date(Date.now() + expirationTime),
			httpOnly: true,
		});

		res.cookie("csrf", process.env.CSRF_TOKEN_SECRET, {
			httpOnly: true,
		});

		const userObject = user.toObject({
			versionKey: false,
			transform: (ret: Record<string, any>) => {
				delete ret.password;
				return ret;
			},
		});

		res.status(200).json(userObject);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/logout", async (res: Response) => {
	res.cookie("token", "", { maxAge: 0 });
	res.cookie("refreshToken", "", { maxAge: 0 });
	// res.clearCookie("token");
	// res.clearCookie("refreshToken");
	res.status(200).json({ message: "Logged out" });
});

router.post("/refresh", verifyToken, async (res: Response, req: Request) => {
	const { token } = (req as RequestWithCookies).cookies;

	const decodedUserId = jwtDecode<CustomJWTPayload>(token).userId;

	const foundUser = await User.findById(decodedUserId);

	if (!foundUser) {
		res.status(403).json({ error: "userId is invalid" });
	}

	try {
		const newToken = generateToken(decodedUserId);
		const newRefreshToken = generateToken(decodedUserId, "refresh");

		res.cookie("token", newToken, {
			maxAge: +!process.env.TOKEN_TTL,
			httpOnly: true,
		});

		res.cookie("refreshToken", newRefreshToken, {
			maxAge: +!process.env.TOKEN_TTL,
			httpOnly: true,
		});

		res.status(200).json({ message: "Tokens refreshed" });
	} catch (err) {
		res.status(500).json({
			error: "Something went wrong while refreshing tokens",
		});
	}
});

router.get("/who_am_i", verifyToken, async (res: Response, req: Request) => {
	const { token } = (req as RequestWithCookies).cookies;

	const decodedUserId = jwtDecode<CustomJWTPayload>(token).userId;

	const foundUser = await User.findById(decodedUserId);

	if (!foundUser) {
		res.status(403).json({ error: "userId is invalid" });
	}
	try {
		const userObject = foundUser?.toObject({
			versionKey: false,
			transform: (ret: Record<string, any>) => {
				delete ret.password;
				return ret;
			},
		});

		res.status(200).json(userObject);
	} catch (err) {
		res.status(500).json({
			error: "Something went wrong while sending user data",
		});
	}
});

module.exports = router;
