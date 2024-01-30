import express from "express";
import routes from "./routes/index.js";
import dbConnect from "./config/database.js";
import { configDotenv } from "dotenv";

configDotenv();
export const app = express();
app.use(express.json());
dbConnect();
routes(app);

export default app;
