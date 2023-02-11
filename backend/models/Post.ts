import { ObjectId } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";

// IMAGES
// DB: imageFilename
// TO CLIENT: imageUrl

export type LocationType = {
	city: string;
	street: string;
	// TODO: Uncomment when map api is ready
	//
	map: {
		latitude: string;
		longitude: string;
	};
};

export interface PostType extends Document {
	user: {
		id: string;
		name: string;
		surname: string;
		avatarFilename: string;
	};
	title: string;
	desc: string;
	category: string;
	peopleLimit: number;
	// photo: string;
	location: LocationType;
	date: number;
	imageFilename: string;
	// requesty do usera
	pendingRequestsTo: ObjectId[];
	// requesty od usera
	pendingRequestsFrom: ObjectId[];
	participants: ObjectId[];
	archived: boolean;
}

const PostSchema = new mongoose.Schema({
	user: {
		id: {
			type: String,
			required: true,
			// unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		avatarFilename: {
			type: String,
			required: false,
		},
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: false,
	},
	category: {
		type: String,
		required: true,
	},
	peopleLimit: {
		type: Number,
		required: true,
	},
	imageFilename: {
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
			required: false,
		},
		// TODO: Uncomment when map api is ready
		map: {
			latitude: {
				type: Number,
			},
			longitude: {
				type: Number,
			},

			required: false,
		},
	},
	date: {
		type: Date,
		required: true,
	},
	pendingRequestsFrom: [{ type: ObjectId, ref: "User", default: [] }],
	pendingRequestsTo: [{ type: ObjectId, ref: "User", default: [] }],
	participants: [{ type: ObjectId, ref: "User", default: [] }],
	archived: {
		type: Boolean,
		default: false,
	},
});

const Post = mongoose.model<PostType>("Post", PostSchema);

export default Post;
