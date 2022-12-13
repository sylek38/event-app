import dotenv from "dotenv";
import express from "express";
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
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

app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);

app.listen(port, () => {
	console.log(`[server]: Server is running at https://localhost:${port}`);
});
