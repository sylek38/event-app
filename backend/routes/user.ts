import { Request, response, Response } from "express";
import { uploadImage } from "../middleware/upload/images";
import User from "../models/User";
import { verifyToken } from "./verify/verifyToken";
import { unlink } from "fs/promises";

const router = require("express").Router();
const bcrypt = require("bcrypt");

interface RequestWithParams extends Request {
	params: {
		id: string;
	};
}

interface GeneralUpdateRequest extends RequestWithParams {
	file: Express.Multer.File;
	body: {
		name?: string;
		surname?: string;
		email?: string;
		bio?: string;
	};
}

interface UpdateData {
	name?: string;
	surname?: string;
	email?: string;
	bio?: string;
}
// Update user (General)
router.put(
	"/general/:id",
	verifyToken,
	uploadImage,
	async (req: GeneralUpdateRequest, res: Response) => {
		const { id: userIdFromParams } = req.params;

		const foundUser = User.findOne({ _id: userIdFromParams });

		if (!foundUser) {
			return res.status(400).json({ error: "User not found" });
		}
		const updates: Partial<UpdateData> = {};
		const fields: (keyof UpdateData)[] = [
			"name",
			"surname",
			"email",
			"bio",
		];

		fields.forEach(async field => {
			if (req.body[field]) {
				updates[field] = req.body[field];
			}
		});

		const updateData = req.file
			? {
					...updates,
					avatarFilename: req.file.filename,
			  }
			: updates;

		const updatedUser = await User.findOneAndUpdate(
			{ _id: userIdFromParams },
			updateData
		);

		if (!updatedUser) {
			return res.status(404).json({ error: "Could not update the data" });
		}
		const responseData = req.file
			? {
					...updates,
					avatarUrl: `http://${req.get("host")}/public/images/${
						req.file.filename
					}`,
			  }
			: updates;

		return res.status(200).send(responseData);
	}
);

// Update user (password)

interface PasswordUpdateRequest extends RequestWithParams {
	body: {
		new_password: string;
		old_password: string;
	};
}

router.put(
	"/password/:id",
	verifyToken,
	async (req: PasswordUpdateRequest, res: Response) => {
		const { old_password, new_password } = req.body;
		const { id } = req.params;

		const foundUser = await User.findOne({ _id: id });

		if (!foundUser) {
			return res.status(400).json({ error: "User not found" });
		}

		if (old_password !== new_password) {
			return res.status(403).json({ error: "Passwords do not match" });
		}

		if (foundUser.password === new_password) {
			return res.status(403).json({
				error: "Your new password must be different from your current password",
			});
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(new_password, salt);

		try {
			await User.findOneAndUpdate(
				{ _id: id },
				{ password: hashedPass },
				{ new: true }
			);

			return res
				.status(200)
				.json({ message: "Password has been changed" });
		} catch (err) {
			return res.status(500).json({
				error: "Something went wrong while updating the password",
			});
		}
	}
);

//Usuwanie konta
router.delete(
	"/delete/:id",
	verifyToken,
	async (req: RequestWithParams, res: Response) => {
		const { id } = req.params;
		const foundUser = await User.findOne({ _id: id });

		if (!foundUser) {
			return res.status(404).json({ error: "User does not exist" });
		}

		const deletedUser = await User.findOneAndDelete({ _id: id });

		if (!deletedUser) {
			return res.status(500).json({
				error: "Something went wrong while deleting the user",
			});
		}

		if (foundUser?.avatarFilename) {
			await unlink(`public/images/${foundUser.avatarFilename}`);
		}
		return res.status(200).json({ message: "User successfully deleted" });
	}
);

// Get user
router.get("/:id", async (req: RequestWithParams, res: Response) => {
	const { id } = req.params;
	const foundUser = await User.findOne({ _id: id });

	if (!foundUser) {
		return res.status(404).json({ error: "User not found" });
	}

	const responseData = {
		name: foundUser.name,
		surname: foundUser.surname,
		bio: foundUser.bio,
		avatarUrl: `http://${req.get("host")}/public/images/${
			foundUser.avatarFilename
		}`,
	};

	return res.status(200).json(responseData);
});

// Get users
router.get("/", async (req: Request, res: Response) => {
	const foundUsers = await User.find();

	const responseData = foundUsers.map(user => ({
		name: user.name,
		surname: user.surname,
		bio: user.bio,
		avatarUrl: `http://${req.get("host")}/public/images/${
			user.avatarFilename
		}`,
	}));

	return res.json(responseData);
});

module.exports = router;
