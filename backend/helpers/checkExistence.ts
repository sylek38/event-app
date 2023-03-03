import { Response } from "express";
import mongoose, { Document } from "mongoose";

export type ModelType = mongoose.Model<Document>;

export const checkExistence = async <T extends Document>(
	model: mongoose.Model<T>,
	id: string,
	res: Response
) => {
	const foundDocument = await model.findOne({ _id: id });

	if (!foundDocument) {
		return res.status(404).json({
			error: `${model.modelName} does not exist`,
		});
	}

	return foundDocument;
};
