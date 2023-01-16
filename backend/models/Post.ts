import mongoose, { Document } from "mongoose";

export type LocationType = {
	city: string;
	street: string;
	// map: {
	// 	lat: string;
	// 	lon: string;
	// }
};

export interface PostType extends Document {
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

const PostSchema = new mongoose.Schema(
	{
		user: {
			id: {
				type: String,
				required: true,
				unique: true,
			},
			name: {
				type: String,
				required: true,
			},
			surname: {
				type: String,
				required: true,
			},
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
	},
	{ timestamps: true }
);

const Post = mongoose.model<PostType>("Post", PostSchema);

export default Post;
