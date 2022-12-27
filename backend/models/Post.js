const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			unique: true,
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

		map: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
