import User from "../models/User";

import { Response, Request } from "express";
// import { upload } from "../middleware/upload/upload";
import Category from "../models/Category";
const bcrypt = require("bcrypt");

const router = require("express").Router();
import Post, { LocationType, PostType } from "../models/Post";
import { verifyToken } from "./verify/verifyToken";
import { uploadImage } from "../middleware/upload/images";
import { unlink } from "fs/promises";

const LIMIT = 4;

interface RequestWithFile extends Request {
	file: Express.Multer.File;
}

interface NewPostType extends RequestWithFile {
	body: {
		userId: string;
		title: string;
		desc: string;
		category: string;
		peopleLimit: number;
		location: {
			city: string;
			street: string;
			// map: {
			// 	lat: String,
			// 	long: String,
			// },
		};
		date: string;
	};
}

// --------------- CREATE POST
router.post(
	"/add",
	verifyToken,
	uploadImage,
	async (req: NewPostType, res: Response) => {
		const { userId, title, desc, category, peopleLimit, location, date } =
			req.body;

		const foundUser = await User.findOne({ _id: userId });

		if (!foundUser) {
			return res.status(400).json({
				error: "User id not found",
			});
		}

		if (!title || !category || !peopleLimit || !location.city || !date) {
			return res.status(400).json({
				error: "You must provide all neccessary data",
			});
		}

		const data = {
			user: {
				id: userId,
				name: foundUser.name,
				surname: foundUser.surname,
			},
			title,
			desc,
			category,
			peopleLimit,
			location,
			date,
		};

		const allData = req.file
			? {
					...data,
					imageFilename: req.file.filename,
			  }
			: {
					...data,
			  };

		const newPost = new Post(allData);
		await newPost.save();

		const responseData = {
			...data,
			image: `http://${req.get("host")}/public/images/${
				req.file.filename
			}`,
		};

		try {
			res.status(200).json(responseData);
		} catch (error) {
			res.status(500).json({
				error: "Something went wrong while adding new post",
			});
		}
	}
);

// ------------- UPDATE POST

interface UpdatePostParamsType extends Request {
	params: {
		id: string;
	};
}

interface UpdatePostRequest extends UpdatePostParamsType {
	file: Express.Multer.File;
	body: {
		userId: string;
		title?: string;
		desc?: string;
		category?: string;
		peopleLimit?: number;
		location?: LocationType;
		date?: number;
	};
}

interface UpdateData {
	title?: string;
	desc?: string;
	category?: string;
	peopleLimit?: number;
	location?: LocationType;
	date?: number;
}

router.put(
	"/post/:id",
	verifyToken,
	uploadImage,
	async (req: UpdatePostRequest, res: Response) => {
		const { title, desc, category, peopleLimit, location, date, userId } =
			req.body;
		const { id: postId } = req.params;
		const foundPost = await Post.findOne({ _id: postId });

		if (!foundPost) {
			res.status(404).json({ error: "Post does not exist" });
		}

		if (foundPost?.user.userId !== userId) {
			res.status(401).json({ error: "You can only edit your posts" });
		}

		const updates: Partial<UpdateData> = {};
		const fields: (keyof UpdateData)[] = [
			"title",
			"desc",
			"category",
			"peopleLimit",
			"location",
			"date",
		];

		fields.forEach(field => {
			if (peopleLimit) {
				updates.peopleLimit = peopleLimit;
			}

			if (location) {
				updates.location = location;
			}

			if (date) {
				updates.date = date;
			}

			if (
				req.body[field] &&
				field !== "peopleLimit" &&
				field !== "location" &&
				field !== "date"
			) {
				updates[field] = req.body[field];
			}
		});

		const updateData = req.file
			? {
					...updates,
					avatarFilename: req.file.filename,
			  }
			: updates;

		const updatedPost = await Post.findOneAndUpdate(
			{ _id: postId },
			updateData,
			{ new: true }
		);

		if (!updatedPost) {
			return res.status(500).json({
				error: "Something went wrong while updating the post",
			});
		}

		const responseData = req.file
			? {
					...updates,
					imageUrl: `http://${req.get("host")}/public/images/${
						req.file.filename
					}`,
			  }
			: updates;

		return res.status(200).json(responseData);
	}
);

// ------------------- DELETE POST
interface DeletePostParamsType extends Request {
	params: {
		id: string;
	};
}

interface DeletePostType extends DeletePostParamsType {
	userId: string;
}

router.delete(
	"/delete/:id",
	verifyToken,
	async (req: DeletePostType, res: Response) => {
		const { userId } = req.body;
		const { id: postId } = req.params;

		const foundPost = await Post.findOne({ _id: postId });

		if (!foundPost) {
			return res.status(404).json({ error: "Post does not exist" });
		}

		if (foundPost?.user.userId != userId) {
			return res
				.status(401)
				.json({ error: "You can only edit your posts" });
		}
		const deletedUser = await foundPost?.delete();

		if (!deletedUser) {
			return res.status(500).json({
				error: "Something went wrong while deleting the post.",
			});
		}

		if (foundPost?.imageFilename) {
			await unlink(`public/images/${foundPost.imageFilename}`);
		}

		return res.status(200).json({ message: "The post have been deleted" });
	}
);

// --------------- GET POST

interface GetPostParamsType extends Request {
	id: string;
}

router.get(
	"/post/:id",
	verifyToken,
	async (req: GetPostParamsType, res: Response) => {
		const { id } = req.body;

		const foundPost = await Post.findOne({ _id: id });

		if (!foundPost) {
			res.status(404).json({
				error: "Post does not exist",
			});
		}

		try {
			res.status(200).json(foundPost);
		} catch (err) {
			res.status(500).json({
				error: `Something went wrong while getting the post`,
			});
		}
	}
);

// ----------------- GET POSTS
interface PostsQuery extends Request {
	query: {
		page: string;
		city: string;
		category: string;
		date: string;
		peopleLimit: string;
	};
}

// ZACZYNAMY OD PAGE 1, NIE 0

router.get("/infinite", async (req: PostsQuery, res: Response) => {
	const { city, category, date, peopleLimit } = req.query;
	const { page } = req.query || 1;

	let processedCategory = category || "all";
	const processedCity = city || "all";
	const processedDate = date || 0;
	const processedPeopleLimit = +peopleLimit || 99;
	const nextPage = +page + 1;
	const prevPage = +page - 1;
	console.log(category, "CATEGORY");
	// try {
	// array z wszystkimi kategoriami lub z jedną
	const categoriesToFind =
		processedCategory === "all"
			? await (await Category.find()).map(category => category.name)
			: [processedCategory];
	// const cityToSearch
	const cityToFind =
		processedCity === "all"
			? await (await Post.find()).map(post => post.location.city)
			: [processedCity];

	// return res.status(200).json(citiesToFind.);
	// // ZOBRAZOWANIE DZIAŁANIA TEJ PAGINAJCI:
	// // strona 1 --> 0 * 5 = 0 | skipujemy 0 elementów
	// // limit --> 5 | dajemy limit na 5 elementów. pokazuje nam 5 pierwszych rekordów

	// // strona 2 --> 1 * 5 = 5 | skipujemy 5 pierwszych elementów (zaczynamy od 6-go)
	// // limit --> 5 | dajemy limit na 5 elementów. pokazuje nam rekordy od 6 do 11

	// // lte = less than or equal to
	// // gte = greater than or equal to

	const filteredPosts = await Post.find({
		category: { $in: categoriesToFind },
		"location.city": { $in: cityToFind },
		peopleLimit: { $lte: +processedPeopleLimit },
		date: { $gte: +processedDate },
	})
		.sort({ date: "desc" })
		.skip((+page - 1) * LIMIT)
		.limit(LIMIT);

	// // // old implementation:
	// // // const filteredPosts = await Post.find()
	// // // 	.where("category")
	// // // 	.in(categoriesToFind).and()
	// // // 	.where("location.city")
	// // // 	.in(citiesToFind)
	// // // 	.where("peopleLimit")
	// // // 	.in([+peopleLimit])
	// // // 	.where("date")
	// // // 	.gte
	// // // 	.sort({ date: "desc" })
	// // // 	// before: processedPage * limit
	// // // 	.skip((+page - 1) * LIMIT)
	// // // 	.limit(LIMIT);

	const totalPages = Math.ceil(filteredPosts.length / LIMIT);
	const hasNextPage = nextPage <= totalPages;
	const hasPrevPage = prevPage >= 1;

	const dataResponse = filteredPosts.map(post => ({
		id: post._id,
		user: {
			id: post.user.userId,
			name: post.user.name,
			surname: post.user.surname,
		},
		title: post.title,
		desc: post.desc,
		category: post.category,
		peopleLimit: post.peopleLimit,
		imageUrl: `http://${req.get("host")}/public/images/${
			post.imageFilename
		}`,
		location: {
			city: post.location.city,
			street: post.location.street,
			// TODO: Uncomment when map api is ready
			// map: {
			// 	lat: post.location.lat,
			// 	long: post.location.long,
			// }
		},
		date: post.date,
	}));

	const response = {
		results: dataResponse,
		next: hasNextPage,
		previous: hasPrevPage,
	};

	console.log(response, "RESPONSE");

	return res.status(200).json(response);
	// } catch (error) {
	// 	res.status(500).json({
	// 		error: "Something went wrong with filtering posts",
	// 	});
	// }
});

interface RequestWithFile extends Request {
	file: Express.Multer.File;
}

interface UpdateRequest extends RequestWithFile {
	body: {
		name?: string;
		surname?: string;
		email?: string;
		bio?: string;
		password?: string;
		image?: Express.Multer.File;
	};
	params: {
		id: string;
	};
}

module.exports = router;
