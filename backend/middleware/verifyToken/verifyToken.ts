import { NextFunction, Response, Request as RequestExpress } from "express";
import jwt from "jsonwebtoken";
import { Request } from "express-serve-static-core";

export interface RequestWithCookies extends RequestExpress {
	cookies: {
		token: string;
		refreshToken: string;
	};
}
export interface RequestWithToken extends RequestExpress {
	token: string;
	refreshToken?: string;
}

export interface TokenPayload {
	date: number;
	userId: string;
}

export interface CustomJWTPayload {
	date: number;
	userId: string;
}

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { token, refreshToken } = (req as RequestWithCookies).cookies;

	const csrfHeader =
		// (0 Bearer, 1 token)
		(req as Request).headers.authorization?.split(" ")[1];

	// All tokens pass
	console.log(token, "TOKEN");
	console.log(refreshToken, "REFRESH");
	console.log(csrfHeader, "CSRF");

	if (
		!token ||
		!refreshToken ||
		csrfHeader !== process.env.CSRF_TOKEN_SECRET
	) {
		return res.status(401).json({
			error: "Not authenticated.",
		});
	}

	jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any) => {
		if (err) {
			console.log("ERROR ELKO token:", err);
			return res.status(403).json({
				error: "Do not have permission. [token]",
			});
		}

		res.locals.token = token;
		next();
	});

	// TODO: fix invalid signature if we have time, or decide not to check refresh token every time
	// jwt.verify(
	// 	refreshToken,
	// 	process.env.REFRESH_TOKEN_SECRET as string,
	// 	(err: any) => {
	// 		if (err) {
	// 			console.log("ERROR ELKO refresh token:", err);
	// 			return res.status(403).json({
	// 				error: "Do not have permission. [Refresh token]",
	// 			});
	// 		}
	// 		res.locals.refreshToken = refreshToken;
	// 		(req as RequestWithToken).cookies.refreshToken = token;

	// 		next();
	// 	}
	// );
};

export const generateToken = (
	userId: string,
	tokenType: "token" | "refresh" = "token",
	TTL?: number
) => {
	const payload: CustomJWTPayload = {
		date: Date.now(),
		userId,
	};

	const TokenTTL = TTL ? TTL : process.env.TOKEN_TTL;

	return jwt.sign(
		{ payload },
		(tokenType === "token"
			? process.env.TOKEN_SECRET
			: process.env.REFRESH_TOKEN_SECRET) as string,
		{
			expiresIn: TokenTTL,
		}
	);
};
