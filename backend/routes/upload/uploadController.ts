// const upload = require("../middleware/upload");
// const dbConfig = require("../config/db");

// const MongoClient = require("mongodb").MongoClient;
// const GridFSBucket = require("mongodb").GridFSBucket;
// import { Request, Response } from "express";

// const url = dbConfig.url;

// const baseUrl = "http://localhost:8080/files/";

// const mongoClient = new MongoClient(url);

// interface RequestWithFile extends Request {
// 	file?: Express.Multer.File;
// }

// const uploadFiles = async (req: RequestWithFile, res: Response) => {
// 	try {
// 		await upload(req, res);
// 		console.log(req.file);

// 		if (req.file == undefined) {
// 			return res.status(400).json({
// 				message: "You must select a file.",
// 			});
// 		}

// 		return res.send({
// 			message: "File has been uploaded.",
// 		});
// 	} catch (error) {
// 		console.log(error);

// 		return res.status(500).json({
// 			message: "Error when trying upload image: ${error}",
// 		});
// 	}
// };

// interface FileInterface {

// }

// const getListFiles = async (req: Request, res: Response) => {
// 	try {
// 		await mongoClient.connect();

// 		const database = mongoClient.db(process.env.MONGO_URL);
// 		const images = database.collection(`${process.env.IMG_BUCKET_NAME}.files`);

// 		const cursor = images.find({});

// 		if ((await cursor.count()) === 0) {
// 			return res.status(500).send({
// 				error: "No files found!",
// 			});
// 		}

// 		let fileInfos = [];
// 		await cursor.forEach(doc => {
// 			fileInfos.push({
// 				name: doc.filename,
// 				url: baseUrl + doc.filename,
// 			});
// 		});

// 		return res.status(200).send(fileInfos);
// 	} catch (error) {
// 		return res.status(500).send({
// 			message: error.message,
// 		});
// 	}
// };
