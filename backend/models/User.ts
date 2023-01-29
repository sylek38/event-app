import mongoose, { Document, Schema } from "mongoose";

// IMAGES
// DB: avatarFilename
// TO CLIENT: avatarUrl

export interface UserType extends Document {
	name: string;
	surname: string;
	email: string;
	password: string;
	bio?: string;
	avatarFilename: string;
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
});

// export default model<UserType>("User", User);
const User = mongoose.model<UserType>("User", UserSchema);

export default User;
