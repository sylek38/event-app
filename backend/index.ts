import dotenv from "dotenv";
import express from "express";
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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

app.use("/backend/auth", authRoute);
