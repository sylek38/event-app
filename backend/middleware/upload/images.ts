require("dotenv").config();

import multer, { diskStorage, FileFilterCallback, Options } from "multer";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";

const multerConfig = {
	dest: "./public/images",
	storage: diskStorage({
		destination: (req, file, cb) => {
			cb(null, "./public/images");
		},
		filename: (req, file, cb) => {
			cb(null, uuidv4() + file.originalname);
		},
	}),
	fileFilter: (
		req: Request,
		file: Express.Multer.File,
		cb: FileFilterCallback
	) => {
		if (!file) cb(null, false);

		const fileTypes = /jpeg|jpg|png/;
		const mimeType = fileTypes.test(file.mimetype);

		if (!mimeType) cb(null, false);

		cb(null, true);
	},
	limits: { fileSize: process.env.MAX_FILE_SIZE },
} as Options;

export const uploadImage = multer(multerConfig).single("image");
