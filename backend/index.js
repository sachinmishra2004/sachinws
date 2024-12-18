import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ConnectDB from "./utils/db.js";
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 4000;

//medilewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//api

app.listen(PORT, (req, res) => {
  ConnectDB();
  console.log(`sever running on ${PORT}`);
});
