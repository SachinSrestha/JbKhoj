import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./config/dbConnection.js";
import dotenv from 'dotenv'; 
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, ()=>{
    connectDb();
    console.log(`Listening the server on port ${PORT}`)
})