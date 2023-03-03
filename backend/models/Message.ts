import mongoose, { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

interface MessageType {
	participants: ObjectId[];
	messages: ObjectId[];
}

const MessageSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	conversation: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Conversation",
	},
	createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model<MessageType>("Message", MessageSchema);

export default Message;
