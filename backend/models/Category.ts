import mongoose from "mongoose";

export type CategoryType = {
	name: string;
};

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

const Category = mongoose.model<CategoryType>("Category", CategorySchema);
export default Category;
