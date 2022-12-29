import mongoose, { Document } from "mongoose";

interface UserType extends Document {
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
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			required: false,
			default: "defaultPic.png",
		},
		bio: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

// export default model<UserType>("User", User);
const User = mongoose.model<UserType>("User", UserSchema);

export default User;
