import dotenv from "dotenv";
import express from "express";
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
const cors = require("cors");
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
	// origin: "http://localhost:3000",
	origin: true,
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
	// allowedHeaders: ["authorization", "Authorization"],
	// exposedHeaders: ["authorization", "Authorization"],
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(cors());

const port = process.env.PORT;
const domain = process.env.DOMAIN;

mongoose
	.connect(process.env.MONGO_URL ?? "")
	.then(() => console.log("conntected to mongoDB"))
	.catch((err: any) => console.log(err));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", [
		"http://localhost:8000",
		"http://localhost:3000",
	]);
	res.header("Access-Control-Allow-Origin", "http://localhost:8000");
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	// res.header("Access-Control-Allow-Headers: Content-Type, Authorization")

	// res.header("Access-Control-Allow-Headers", "*");
	// res.header("Access-Control-Allow-Methods", "*");
	// res.header("Access-Control-Allow-Credentials", "true");
	next();
});

app.get("/", (req, res) => {
	res.send("Express + TypeScript Server");
});

app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
app.use("/backend/posts", postRoute);
app.use("/backend/category", categoryRoute);

app.listen(port, () => {
	console.log(`[server]: Server is running at ${domain}:${port}`);
});
