import { verifyToken } from "./middleware/verifyToken/verifyToken";
// import dotenv from "dotenv";
import * as dotenv from "dotenv";
import express from "express";
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
const eventsRoute = require("./routes/events");

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
	credentials: true,
	optionSuccessStatus: 200,
	allowedHeaders: ["authorization", "Authorization", "Content-Type"],
	exposedHeaders: ["authorization", "Authorization", "Content-Type"],
};

app.use(cors(corsOptions));

// app.use(cors());

const port = process.env.PORT;
const domain = process.env.DOMAIN;

app.use("/public", express.static("public"));

mongoose
	.connect(process.env.MONGO_URL ?? "")
	.then(() => console.log("conntected to mongoDB"))
	.catch((err: any) => {
		console.log(err);
		process.exit(1);
	});

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", [
		"http://localhost:8000",
		"http://localhost:3000",
	]);
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Origin", "http://localhost:8000");
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	// IDK, tried everything to make it work xd
	res.header(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
	);
	next();
});

app.get("/", (req, res) => {
	res.send("Express + TypeScript Server");
});

app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
app.use("/backend/posts", postRoute);
app.use("/backend/categories", categoryRoute);
app.use("/backend/events", eventsRoute);
// app.use(verifyToken);

app.listen(port, () => {
	console.log(`[server]: Server is running at ${domain}:${port}`);
});
