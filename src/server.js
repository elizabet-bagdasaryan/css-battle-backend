import express from "express";
import { connection } from "./config/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import getPilot from "./controllers/pilotController.js";
import getVis from "./controllers/visibilityController.js";
import getCursor from "./controllers/cursorController.js";
import getDisplay from "./controllers/displayController.js";
const app = express();

dotenv.config();
connection();

app.use(bodyParser.json());
app.get("/pilot/:name", getPilot);
app.get("/visibility/:name", getVis);
app.get("/cursor/:name", getCursor);
app.get("/display/:name", getDisplay);

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is listening on port 3000");
});
