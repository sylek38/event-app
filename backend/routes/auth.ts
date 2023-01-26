import {
	generateToken,
	RequestWithCookies,
	verifyToken,
} from "./verify/verifyToken";
import jwt, { JwtPayload } from "jsonwebtoken";

import { Request, Response } from "express";
import User, { UserType } from "../models/User";

const router = require("express").Router();
const bcrypt = require("bcrypt");

interface RequestWithFile extends Request {
	file: Express.Multer.File;
}

interface RegisterRequest extends Request {
	body: {
		name: string;
		surname: string;
		email: string;
		password: string;
		bio?: string;
	};
}

router.post("/register", async (req: RegisterRequest, res: Response) => {
	const { name, surname, email, password, bio } = req.body;

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
		});

		const user = await newUser.save();

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

interface LoginRequest extends Request {
	body: {
		email: string;
		password: string;
		rememberMe?: boolean;
	};
}

router.post("/login", verifyToken, async (req: LoginRequest, res: Response) => {
	const { email, password, rememberMe } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		// it will be "Wrong credentials" but for testing these are specified
		return res.status(400).json({ error: "Wrong email" });
	}

	const validated = await bcrypt.compare(password, user.password);

	if (!validated) {
		return res.status(400).json({ error: "Wrong password" });
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
			sameSite: "none",
			secure: true,
		});

		res.cookie("refreshToken", refreshToken, {
			// maxAge: +expirationTime,
			// expires: new Date(Date.now() + expirationTime),
			httpOnly: true,
			sameSite: "none",
			secure: true,
		});

		res.cookie("csrf", process.env.CSRF_TOKEN_SECRET, {
			httpOnly: true,
			sameSite: "none",
			secure: true,
		});

		await user.save();

		res.status(200).json({
			message: "Logged in",
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/logout", async (res: Response, req: Request) => {
	try {
		// TODO: find out how to clear cookies
		// res.clearCookie("token");
		// res.clearCookie("refreshToken");
		// res.cookie("token", "", { maxAge: 0 });
		// res.cookie("refreshToken", "", { maxAge: 0 });
		res.cookie("token", "", { maxAge: 0 });
		res.cookie("refreshToken", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out" });
	} catch (err) {
		res.status(500).json({
			message: "Something went wrong while logging out",
		});
	}
});

router.post("/refresh", verifyToken, async (req: Request, res: Response) => {
	const { token } = (req as RequestWithCookies).cookies;

	const { payload } = jwt.decode(token) as JwtPayload;
	const userId = payload.userId;

	const user = await User.findOne({ _id: userId });

	if (!user) {
		res.status(403).json({ error: "User not found" });
	}

	try {
		const newToken = generateToken(userId);
		const newRefreshToken = generateToken(userId, "refresh");

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

router.get("/who_am_i", verifyToken, async (req: Request, res: Response) => {
	const token = res.locals.token;

	const { payload } = jwt.decode(token) as JwtPayload;
	const userId = payload.userId;

	const user = await User.findOne({ _id: userId });

	if (!user) {
		res.status(403).json({ error: `userId is invalid.` });
	}
	try {
		const { _id, name, surname, email, avatarFilename, bio } =
			user as UserType;
		res.status(200).json({
			id: _id,
			name,
			surname,
			email,
			avatarUrl: `http://${req.get(
				"host"
			)}/public/images/${avatarFilename}`,
			bio,
		});
	} catch (err) {
		res.status(500).json({
			error: "Something went wrong while sending user data",
		});
	}
});

module.exports = router;
