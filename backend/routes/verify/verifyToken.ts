// import { RequestWithCookies } from "./verifyToken";
import { IncomingHttpHeaders } from "http";
import { NextFunction, Response, Request as RequestExpress } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express-serve-static-core";

export interface RequestWithCookies extends RequestExpress {
	cookies: {
		token: string;
		refreshToken: string;
	};
}

export interface TokenPayload {
	date: number;
	userId: string;
}

export type CustomJWTPayload = {
	date: number;
	userId: string;
};

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { token, refreshToken } = (req as RequestWithCookies).cookies;
	console.log(token, refreshToken);

	const csrfHeader = JSON.stringify(
		// (0 Bearer, 1 token)
		(req as Request).headers.authorization?.split(" ")[1]
	);

	if (
		!token ||
		!refreshToken ||
		csrfHeader !== process.env.CSRF_TOKEN_SECRET
	) {
		return res.status(401).json({
			error: "Not authenticated.",
		});
	}

	jwt.verify(token, process.env.JWT_TOKEN_SECRET as string, (err: any) => {
		if (err) {
			return res.status(403).json({
				error: "Do not have permission.",
			});
		}
		(req as RequestWithCookies).cookies.token = token;
		next();
	});

	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET as string,
		(err: any) => {
			if (err) {
				return res.status(403).json({
					error: "Do not have permission.",
				});
			}
			(req as RequestWithCookies).cookies.refreshToken = refreshToken;

			next();
		}
	);
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
