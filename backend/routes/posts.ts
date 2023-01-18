import e, { Response, Request } from "express";
import Category from "../models/Category";

const router = require("express").Router();
const User = require("../models/User");
import Post, { LocationType, PostType } from "../models/Post";
import { verifyToken } from "./verify/verifyToken";

const LIMIT = 4;

interface NewPostType extends Request {
	userId: string;
	title: string;
	desc: string;
	category: string;
	peopleLimit: number;
	photo: string;
	location: {
		city: string;
		street: string;
		// map: {
		// 	lat: String,
		// 	long: String,
		// },
	};
	date: number;
}

// --------------- TWORZENIE POSTA
router.post("/add", verifyToken, async (req: NewPostType, res: Response) => {
	const {
		userId,
		title,
		desc,
		category,
		peopleLimit,
		photo,
		location,
		date,
	} = req.body;

	const userExists = User.findOne({ _id: userId });

	if (!userExists) {
		return res.status(400).json({
			error: "User id not found",
		});
	}

	if (!title || !category || !peopleLimit || !location || !date) {
		return res.status(400).json({
			error: "You must provide all neccessary data",
		});
	}

	const newPost = new Post({
		userId,
		title,
		desc,
		category,
		peopleLimit,
		photo,
		location,
		date,
	});

	try {
		const savedPost = await newPost.save();
		res.status(200).json({ message: savedPost });
	} catch (error) {
		res.status(500).json({
			error: `Something went wrong while adding new post. ${error}`,
		});
	}
});

// ------------- AKTUALIZACJA POSTA
interface UpdatePostParamsType extends Request {
	params: {
		id: string;
	};
}

interface UpdatePostType extends UpdatePostParamsType {
	userId: string;
	title?: string;
	desc?: string;
	category?: string;
	peopleLimit?: number;
	photo?: string;
	location?: {
		city: string;
		street: string;
		// map: {
		// 	lat: String,
		// 	long: String,
		// },
	};
	date?: number;
}

router.put("/:id", verifyToken, async (req: UpdatePostType, res: Response) => {
	const { userId } = req.body;
	const { id: postId } = req.params;
	const foundPost = await Post.findOne({ _id: postId });

	if (!foundPost) {
		res.status(404).json({ error: "Post does not exist" });
	}

	if (foundPost?.user.userId === userId) {
		try {
			const updatedPost = await Post.findByIdAndUpdate(
				postId,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedPost);
		} catch (error) {
			res.status(500).json({
				error: "Something went wrong, could not update the post",
			});
		}
	} else {
		res.status(401).json({ error: "You can only edit your posts" });
	}
});

// ------------------- USUWANIE POSTA
interface DeletePostParamsType extends Request {
	params: {
		id: string;
	};
}

interface DeletePostType extends DeletePostParamsType {
	userId: string;
}

router.delete(
	"/:id",
	verifyToken,
	async (req: DeletePostType, res: Response) => {
		const { userId } = req.body;
		const { id: postId } = req.params;

		const foundPost = await Post.findOne({ _id: postId });

		if (!foundPost) {
			res.status(404).json({ error: "Post does not exist" });
		}

		if (foundPost?.user.userId === userId) {
			try {
				await foundPost?.delete();
				res.status(200).json({ message: "The post have been deleted" });
			} catch (err) {
				res.status(500).json({
					error: "Something went wrong, could not delete post.",
				});
			}
		} else {
			res.status(401).json({ error: "You can only edit your posts" });
		}
	}
);

// Get Post

interface GetPostParamsType extends Request {
	id: string;
}

router.get(
	"/:id",
	verifyToken,
	async (req: GetPostParamsType, res: Response) => {
		const { id } = req.body;

		const foundPost = await Post.findOne({ _id: id });

		if (!foundPost) {
			res.status(404).json({
				error: "Could not find the post with provided id",
			});
		}

		try {
			res.status(200).json(foundPost);
		} catch (err) {
			res.status(500).json({
				error: `Something went wrong while getting the post. ${err}`,
			});
		}
	}
);

// Get all posts
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

router.get("/", verifyToken, async (req: PostsQuery, res: Response) => {
	const { city, category, date, peopleLimit } = req.query;
	const { page } = req.query || 1;

	let processedCategory = category || "all";
	const processedCity = city || "all";
	const processedDate = date || 0;
	const processedPeopleLimit = +peopleLimit || 99;
	const nextPage = +page + 1;
	const prevPage = +page - 1;

	try {
		// array z wszystkimi kategoriami lub z jedną
		const categoriesToFind =
			processedCategory === "all"
				? await Post.find()
				: await Post.find({
						category: { $in: processedCategory },
				  });

		const citiesToFind =
			processedCity === "all"
				? await Post.find()
				: await Post.find({
						"location.city": { $in: processedCity },
						// "location.city": {processedCity}
				  });

		// ZOBRAZOWANIE DZIAŁANIA TEJ PAGINAJCI:
		// strona 1 --> 0 * 5 = 0 | skipujemy 0 elementów
		// limit --> 5 | dajemy limit na 5 elementów. pokazuje nam 5 pierwszych rekordów

		// strona 2 --> 1 * 5 = 5 | skipujemy 5 pierwszych elementów (zaczynamy od 6-go)
		// limit --> 5 | dajemy limit na 5 elementów. pokazuje nam rekordy od 6 do 11

		// lte = less than or equal to
		// gte = greater than or equal to

		const filteredPosts = await Post.find({
			category: { $in: categoriesToFind },
			"location.city": { $in: citiesToFind },
			peopleLimit: { $lte: +processedPeopleLimit },
			date: { $gte: +processedDate },
		})
			.sort({ date: "desc" })
			.skip((+page - 1) * LIMIT)
			.limit(LIMIT);

		// old implementation:
		// const filteredPosts = await Post.find()
		// 	.where("category")
		// 	.in(categoriesToFind).and()
		// 	.where("location.city")
		// 	.in(citiesToFind)
		// 	.where("peopleLimit")
		// 	.in([+peopleLimit])
		// 	.where("date")
		// 	.gte
		// 	.sort({ date: "desc" })
		// 	// before: processedPage * limit
		// 	.skip((+page - 1) * LIMIT)
		// 	.limit(LIMIT);

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
			photo: post.photo,
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

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({
			error: "Something went wrong with filtering posts",
		});
	}
});

module.exports = router;
