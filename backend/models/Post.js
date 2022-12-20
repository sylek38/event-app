const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: false,
		},
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		poepleLimit: {
			type: Number,
			required: true,
		},

		//Trzeba dodać jeszcze obiekt z informacją współrzednych dla mapy
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
