import express from "express";
import dotenv from "dotenv";
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log("conntected to mongoDB"))
	.catch((err: any) => console.log(err));

app.get("/", (req, res) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at https://localhost:${port}`);
});
