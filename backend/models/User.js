const mongoose = require("mongoose");

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
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
