import { PostType } from "../models/Post";
import { checkExistence } from "../helpers/checkExistence";
import { Request, Response } from "express";
import Post from "../models/Post";
import User, { UserType } from "../models/User";
import { ObjectId } from "mongodb";
import { Schema } from "mongoose";

const router = require("express").Router();

const checkIfExists = (arr: ObjectId[], id: ObjectId) => {
	if (arr.length === 0) return false;

	const isExists = arr.includes(id);

	console.log(isExists, "ISEXISTS", id, "ID");

	return isExists;
};

interface RequestWithParams extends Request {
	params: {
		userId: string;
		postId: string;
	};
}

// SEND INVITE REQUEST

router.post(
	"/invite/:userId/:postId",
	async (req: RequestWithParams, res: Response) => {
		const { userId, postId } = req.params;

		const foundUser = await checkExistence<UserType>(User, userId, res);
		const foundEvent = await checkExistence<PostType>(Post, postId, res);

		if (foundEvent instanceof Post && foundUser instanceof User) {
			const processedUserId = new ObjectId(userId);
			const processedPostId = new ObjectId(postId);

			const isParticipant = await checkIfExists(
				foundEvent.participants,
				processedUserId
			);

			console.log(foundEvent, "FOUND EVENT");

			if (isParticipant) {
				return res
					.status(403)
					.json({ error: "User is already participating" });
			}

			const isRequestPendingTo = checkIfExists(
				foundEvent.pendingRequestsTo,
				processedUserId
			);

			if (isRequestPendingTo) {
				return res
					.status(403)
					.json({ error: "Invite is already pending" });
			}

			const isRequestPendingFrom = checkIfExists(
				foundEvent.pendingRequestsFrom,
				processedUserId
			);

			if (isRequestPendingFrom) {
				return res
					.status(403)
					.json({ error: "User already sent a join request" });
			}

			// foundEvent.pendingRequestsTo =
			// 	foundEvent.pendingRequestsTo &&
			// 	foundEvent.pendingRequestsTo.length > 0
			// 		? [...foundEvent.pendingRequestsTo, userId]
			// 		: [userId];
			foundEvent.pendingRequestsTo.push(processedUserId);
			foundUser.pendingInvitesFrom.push(processedPostId);

			// foundUser.pendingInvitesFrom =
			// 	foundUser.pendingInvitesFrom && foundUser.pendingInvitesFrom.length > 0
			// 		? [...foundUser.pendingInvitesFrom, {
			// 			postId: foundEvent.id,
			// 			user: {
			// 				id: foundEvent.user.id,
			// 				name: foundEvent.user.name,
			// 				surname: foundEvent.user.surname,
			// 				avatarUrl: foundEvent
			// 			}
			// 		}]
			// 		: [postId];

			await foundEvent.save();
			await foundUser.save();

			return res.status(200).json({ message: "Invite created" });
		}
	}
);

// SEND JOIN REQUEST

router.post(
	"/join/:userId/:postId",
	async (req: RequestWithParams, res: Response) => {
		const { userId, postId } = req.params;

		const foundUser = await checkExistence<UserType>(User, userId, res);
		const foundEvent = await checkExistence<PostType>(Post, postId, res);

		if (foundEvent instanceof Post && foundUser) {
			const processedUserId = new ObjectId(userId);

			const isParticipant = checkIfExists(
				foundEvent.participants,
				processedUserId
			);

			if (isParticipant) {
				return res.status(403).json({
					error: "User is already participating",
				});
			}

			const isRequestPendingFrom = checkIfExists(
				foundEvent.pendingRequestsFrom,
				processedUserId
			);

			if (isRequestPendingFrom) {
				return res.status(403).json({
					error: "User already sent a join request",
				});
			}

			const isRequestPendingTo = checkIfExists(
				foundEvent.pendingRequestsTo,
				processedUserId
			);

			if (isRequestPendingTo) {
				return res.status(403).json({
					error: "Invitation is already pending",
				});
			}

			foundEvent.pendingRequestsFrom.push(processedUserId);

			await foundEvent.save();

			return res.status(200).json({ message: "Sent a join request" });
		}
	}
);

// // ACCEPT/REJECT INVITATION REQUEST

interface InvitationStatusRequest extends RequestWithParams {
	body: {
		accept: boolean;
	};
}

router.post(
	"/invitation/accept-reject/:userId/:postId",
	async (req: InvitationStatusRequest, res: Response) => {
		const { userId, postId } = req.params;
		const { accept } = req.body;

		const foundUser = await checkExistence<UserType>(User, userId, res);
		const foundEvent = await checkExistence<PostType>(Post, postId, res);

		if (foundEvent instanceof Post && foundUser instanceof User) {
			const processedUserId = new ObjectId(userId);
			const processedPostId = new ObjectId(postId);

			foundEvent.pendingRequestsTo = foundEvent.pendingRequestsTo.filter(
				user => !user.equals(processedUserId)
			);
			foundUser.pendingInvitesFrom = foundUser.pendingInvitesFrom.filter(
				post => !post.equals(processedPostId)
			);

			if (accept) {
				foundEvent.participants.push(processedUserId);
				foundUser.participatingEvents.push(processedPostId);

				foundEvent.save();
				foundUser.save();

				return res.status(200).json({ message: "Invitation accepted" });
			}

			foundEvent.save();
			foundUser.save();

			return res.status(200).json({ message: "Invitation rejected" });
		}
	}
);

// ACCEPT / REJECT JOIN REQUEST

router.post(
	"/join/accept-reject/:userId/:postId",
	async (req: InvitationStatusRequest, res: Response) => {
		const { userId, postId } = req.params;
		const { accept } = req.body;

		const foundUser = await checkExistence<UserType>(User, userId, res);
		const foundEvent = await checkExistence<PostType>(Post, postId, res);

		if (foundEvent instanceof Post && foundUser instanceof User) {
			const processedUserId = new ObjectId(userId);
			const processedPostId = new ObjectId(postId);

			foundEvent.pendingRequestsFrom =
				foundEvent.pendingRequestsFrom.filter(
					user => !user.equals(processedUserId)
				);

			if (accept) {
				foundEvent.participants.push(processedUserId);
				foundUser.participatingEvents.push(processedPostId);

				foundEvent.save();
				foundUser.save();

				return res
					.status(200)
					.json({ message: "Join request accepted" });
			}

			foundEvent.save();

			return res.status(200).json({ message: "Join request rejected" });
		}
	}
);

interface RequestWithId extends Request {
	params: {
		userId: string;
	};
}
// CREATED EVENTS
router.get("/created/:userId", async (req: RequestWithId, res: Response) => {
	const { userId } = req.params;

	const foundUser = await checkExistence<UserType>(User, userId, res);

	if (foundUser instanceof User) {
		const elko = await Post.find({ "user.id": userId })
			.populate("user", "id name surname avatarUrl ")
			.populate("participants", "id name surname avatarUrl")
			.populate("pendingRequestsFrom", "id name surname avatarUrl")
			.select("id title desc date")
			.exec((err, events) => {
				if (err) return res.status(500).json(err);
				return res.status(200).json(events);
			});

		// foundUser.pendingInvitesFrom.

		// const postsData = foundPosts.map(post => ({
		// 	id: post._id,
		// 	user: {
		// 		id: post.user.id,
		// 	name: post.user.name,
		// 	surname: post.user.surname,
		// 	avatarUrl: post.user
		// 		? `http://${req.get("host")}/public/images/${
		// 				post.user.avatarFilename
		// 		  }`
		// 		: "",
		// 	},
		// 	title: post.title,
		// 	location: {
		// 		city: post.location.city,
		// 		street: post.location.street
		// 	},
		// 	date: post.date,
		// 	participants: {
		// 		id: post.participants.
		// 	}
		// }))

		// return res.status(200).json(foundPosts);
	}
});

// PARTICIPATING EVENTS
router.get(
	"/participating/:userId",
	async (req: RequestWithId, res: Response) => {
		const { userId } = req.params;

		const foundUser = await checkExistence<UserType>(User, userId, res);

		if (foundUser instanceof User) {
			if (foundUser instanceof User) {
				await Post.find({ participants: userId })
					.populate("user", "id name surname avatarUrl ")
					.populate("participants", "id name surname avatarUrl")
					.select("id title desc date")
					.exec((err, events) => {
						if (err) return res.status(500).json(err);
						return res.status(200).json(events);
					});
			}
		}
	}
);

// CREATED EVENTS - HISTORY
router.get(
	"/created/history/:userId",
	async (req: RequestWithId, res: Response) => {
		const { userId } = req.params;

		const foundUser = await checkExistence<UserType>(User, userId, res);

		if (foundUser instanceof User) {
			const foundPosts = await Post.find({
				"user.id": userId,
				archived: true,
			});

			return res.status(200).json(foundPosts);
		}
	}
);

// // PARTICIPATING EVENTS - HISTORY
// router.get(
// 	"/participating/history/:userId",
// 	async (req: RequestWithId, res: Response) => {
// 		const { userId } = req.params;

// 		const foundUser = await checkExistence<UserType>(User, userId, res);

// 		if (foundUser instanceof User) {
// 			const foundPosts = await Post.find({
// 				participants: userId,
// 				archived: true,
// 			});

// 			return res.status(200).json(foundPosts);
// 		}
// 	}
// );

// router.get(
// 	"/invitations/:userId",
// 	async (req: RequestWithId, res: Response) => {
// 		const { userId } = req.params;

// 		const foundUser = await checkExistence<UserType>(User, userId, res);

// 		if (foundUser instanceof User) {
// 			const responseData = foundUser.pendingInvites.map(invite => ({
// 				postId: invite.postId
// 			}))

// 			const foundPosts = await Post.find({
// 				pending: userId,
// 				archived: true,
// 			});

// 			return res.status(200).json(foundPosts);
// 		}
// 	}
// );

module.exports = router;
