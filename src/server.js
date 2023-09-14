import express from "express";
import { connection } from "./config/mongo.js";

const app = express();

dotenv.config();
connection();

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is listening on port 3000");
});
