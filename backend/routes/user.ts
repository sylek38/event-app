import { Request, Response } from "express";

const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Aktualizowanie danych konta
router.put("/:id", async (req: Request, res: Response) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(401).json("Możesz edytować jedynie swoje konto!");
	}
});

//Usuwanie konta

router.delete("/:id", async (req: Request, res: Response) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			try {
				await Post.deleteMany({ email: user.email });
				await User.findByIdAndDelete(req.params.id);
				res.status(200).json("Użytkownik został usunięty!");
			} catch (error) {
				res.status(500).json(error);
			}
		} catch (error) {
			res.status(404).json("Użytkownik nie został znaleziony!");
		}
	} else {
		res.status(401).json("Możesz usunąć jedynie swoje konto!");
	}
});

// Get user

router.get("/:id", async (req: Request, res: Response) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
