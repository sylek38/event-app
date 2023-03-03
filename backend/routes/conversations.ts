// import { Request, Response } from "express";

// const router = require("express").Router();
// import Conversation from "../models/Conversation";
// import Post from "../models/Post";

// interface ConversationQuery extends Request {
//     query: {
//         page: string;
//     }
// }

// interface ConversationBody extends ConversationQuery {
// 	body: {
// 		userId: string;
// 	};
// }

// interface Participant {
// 	id: string;
// 	name: string;
// 	surname: string;
// 	avatarFilename: string;
// }

// router.get("/", async (req: ConversationQuery, res: Response) => {
// 	const { userId } = req.body;
//     const { page } = req.query || 1;
//     const nextPage = +page + 1;
// 	const prevPage = +page - 1;

// 	const conversations = await Conversation.find({
// 		participants: { _id: userId },

// 	}).populate({path: "participants.id", model: Post})

// const elko = conversations.map(con => {
//     con.name
// })

// })
// 	// Reduce to a new array that contains only participants different from the user
// 	const participants = conversations.reduce((acc, conversation) => {
// 		conversation.participants.forEach(participant => {
// 			if (participant.id.toString() !== userId.toString()) {
// 				acc.push(participant);
// 			}
// 		});
// 		return acc;
// 	}, []);

// 	return res.status(200).json({ results: participants });
// });
