import mongoose, { Document } from "mongoose";

export interface UserType extends Document {
	name: string;
	surname: string;
	email: string;
	password: string;
	profilePic: string;
	bio?: string;
}

const UserSchema = new mongoose.Schema(
	{
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
		profilePic: {
			type: String,
			required: false,
			default: "defaultPic.png",
		},
	},
	{ timestamps: true }
);

// export default model<UserType>("User", User);
const User = mongoose.model<UserType>("User", UserSchema);

export default User;
