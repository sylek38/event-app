import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

export interface RequestWithCookies extends Request {
	cookies: {
		token: string;
		refreshToken: string;
	};
}

export const verifyToken = (
	req: RequestWithCookies,
	res: Response,
	next: NextFunction
) => {
	const { token, refreshToken } = req.cookies;

	if (!token || !refreshToken) {
		return res.status(401).json({
			error: "Not authenticated.",
		});
	}

	jwt.verify(token, process.env.JWT_TOKEN_SECRET as string, err => {
		if (err) {
			return res.status(403).json({
				error: "Do not have permission.",
			});
		}

		next();
	});

	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET as string,
		err => {
			if (err) {
				return res.status(403).json({
					error: "Do not have permission.",
				});
			}

			next();
		}
	);
};

export const generateToken = (
	tokenType: "token" | "refresh" = "token",
	TTL?: number
) => {
	const payload = Date.now();

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
