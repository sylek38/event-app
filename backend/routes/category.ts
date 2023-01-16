import { Request, Response } from "express";

const router = require("express").Router();
import Category from "../models/Category";

router.post("/add", async (req: Request, res: Response) => {
	const category = new Category(req.body);
	const categoryExists = Category.findOne({ name: category });

	if (!categoryExists) {
		try {
			const savedCategory = await category.save();
			res.status(200).json(savedCategory);
		} catch (error) {
			res.status(500).json({
				error: `Something went wrong while adding a new category. ${error}`,
			});
		}
	} else {
		res.status(409).json({ error: "Category already exists" });
	}
});

router.get("/", async (req: Request, res: Response) => {
	try {
		const categories = await Category.find();
		const categoryNames = categories.map(category => category.name);
		res.status(200).json(categoryNames);
	} catch (error) {
		res.status(500).json({
			error: "Something went wrong while getting categories",
		});
	}
});

module.exports = router;
