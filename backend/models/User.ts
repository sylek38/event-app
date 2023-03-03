import mongoose, { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

// IMAGES
// DB: avatarFilename
// TO CLIENT: avatarUrl

// export interface Participant {
// 	id: string;
// 	name: string;
// 	surname: string;
// 	avatarUrl: string;
// }

// export interface PendingInvite {
// 	postId: string;
// 	user: {
// 		id: string;
// 		name: string;
// 		surname: string;
// 		avatarUrl: string;
// 	};
// }

// export interface ParticipatingEvent {
// 	postId: string;
// 	user: {
// 		id: string;
// 		name: string;
// 		surname: string;
// 		avatarUrl: string;
// 	};
// 	title: string;
// 	location: {
// 		city: string;
// 		street: string;
// 	};
// 	date: string;
// 	participants: Participant[];
// }

// export interface CreatedEvent {
// 	postId: string;
// 	title: string;
// 	location: {
// 		city: string;
// 		street: string;
// 	};
// 	date: string;
// 	participants: Participant[];
// }

export interface UserType extends Document {
	name: string;
	surname: string;
	email: string;
	password: string;
	bio?: string;
	avatarFilename: string;
	pendingInvitesFrom: ObjectId[];
	participatingEvents: ObjectId[];
	createdEvents: ObjectId[];
}

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: false,
	},
	surname: {
		type: String,
		required: true,
		unique: false,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	bio: {
		type: String,
		required: false,
		unique: false,
		default: "",
	},
	password: {
		type: String,
		required: true,
	},
	avatarFilename: {
		type: String,
		required: false,
	},
	pendingInvitesFrom: [{ type: ObjectId, ref: "Post", default: [] }],
	participatingEvents: [{ type: ObjectId, ref: "Post", default: [] }],
	createdEvents: [{ type: ObjectId, ref: "Post", default: [] }],
});

// export default model<UserType>("User", User);
const User = mongoose.model<UserType>("User", UserSchema);

export default User;
