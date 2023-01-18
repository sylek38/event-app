import mongoose, { Document, Schema } from "mongoose";

export type LocationType = {
	city: string;
	street: string;
	// map: {
	// 	lat: string;
	// 	lon: string;
	// }
};

export interface PostType extends Document {
	userId: string;
	title: string;
	desc: string;
	category: string;
	peopleLimit: number;
	photo: string;
	location: LocationType;
	date: number;
}

const PostSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
			unique: true,
		},

		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		peopleLimit: {
			type: Number,
			required: true,
		},
		photo: {
			type: String,
			required: false,
		},
		location: {
			city: {
				type: String,
				required: true,
			},
			street: {
				type: String,
				required: true,
			},
			// map: {
			// 	lat: String,
			// 	long: String,
			// 	required: true,
			// },
		},
		date: {
			type: Date,
			required: true,
		},
		pendingRequests: [
			{ type: Schema.Types.ObjectId, ref: "User", default: [] },
		],
		participants: [
			{ type: Schema.Types.ObjectId, ref: "User", default: [] },
		],
		archived: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model<PostType>("Post", PostSchema);

export default Post;
