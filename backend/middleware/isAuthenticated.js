import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const isAuth = asyncHandler(async(req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        res.status(403);
        throw new Error("UnAuthorized!");
    }

    const data = jwt.verify(token, process.env.JWT_TOKEN);

    if(!data){
        res.status(400);
        throw new Error("Token Expired!");
    }

    req.user = await User.findById(data.id);
    next();
})