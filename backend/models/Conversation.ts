import mongoose, { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

interface ChatMessageType {
	participants: ObjectId[];
	messages: ObjectId[];
}

const ChatMessageSchema = new mongoose.Schema({
	// createdAt: { type: Date, default: Date.now },
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
	],
});

const ChatMessage = mongoose.model<ChatMessageType>(
	"ChatMessage",
	ChatMessageSchema
);

export default ChatMessage;
