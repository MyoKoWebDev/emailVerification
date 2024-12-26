import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import userRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", userRoute);

connectToDatabase();
app.listen(5000, () => {
  console.log(`servier is runnin on post 3000`);
});
