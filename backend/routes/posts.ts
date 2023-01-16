import { Response, Request } from "express";
import Category from "../models/Category";

const router = require("express").Router();
const User = require("../models/User");
import Post, { LocationType, PostType } from "../models/Post";
import { verifyToken } from "./verify/verifyToken";

const LIMIT = 4;
const CATEGORIES = [
	{ name: "party" },
	{ name: "jogging" },
	{ name: "all" },
	{ name: "wine" },
	{ name: "plants" },
];

interface NewPostType extends Request {
	user: {
		id: string;
		name: string;
		surname: string;
	};
	title: string;
	desc: string;
	category: string;
	peopleLimit: number;
	photo: string;
	location: LocationType;
	date: number;
}

//Tworzenie nowego postu
router.post("/add", async (req: NewPostType, res: Response) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (error) {
		res.status(500).json({
			error: `Something went wrong while adding new post. ${error}`,
		});
	}
});

//Aktualizacja postu

// router.put("/:id", async (req: Request, res: Response) => {
// 	try {
// 		const post = await Post.findById(req.params.id);
// 		if (post.username === req.body.username) {
// 			try {
// 				const updatedPost = await Post.findByIdAndUpdate(
// 					req.params.id,
// 					{
// 						$set: req.body,
// 					},
// 					{ new: true }
// 				);
// 				res.status(200).json(updatedPost);
// 			} catch (error) {
// 				res.status(500).json(error);
// 			}
// 		} else {
// 			res.status(401).json("Możesz edytować tylko swoje posty!");
// 		}
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

// Usuwanie postu

// router.delete("/:id", async (req: Request, res: Response) => {
// 	try {
// 		const post = await Post.findById(req.params.id);
// 		if (post.username === req.body.username) {
// 			try {
// 				await post.delete();
// 				res.status(200).json("Post został usunięty!");
// 			} catch (error) {
// 				res.status(500).json(error);
// 			}
// 		} else {
// 			res.status(401).json("Możesz usuwać tylko swoje posty!");
// 		}
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

// Get Post

// router.get("/:id", async (req: Request, res: Response) => {
// 	try {
// 		const post = await Post.findById(req.params.id);
// 		res.status(200).json(post);
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

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

router.get("/", async (req: PostsQuery, res: Response) => {
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

		const {
			_id,
			user,
			title,
			desc,
			category,
			peopleLimit: eventPeople,
			photo,
			location,
			date: eventDate,
		} = filteredPosts[0];

		const response = {
			results: {
				id: _id,
				user: {
					id: user.id,
					name: user.name,
					surname: user.surname,
				},
				title,
				desc,
				category,
				peopleLimit: eventPeople,
				photo,
				location: {
					city: location.city,
					street: location.street,
				},
				date: eventDate,
			},
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
