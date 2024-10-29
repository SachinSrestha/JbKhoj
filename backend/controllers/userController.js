import asyncHandler from 'express-async-handler';
import {User} from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import bcrypt from "bcrypt"

export const register = asyncHandler(async (req,res)=>{
    const {email, password, fullName, mobileNumber, role}= req.body;

    if(!email || !password || !fullName || !mobileNumber || !role){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    let user = await User.findOne({email});

    if(user){
        res.status(400);
        throw new Error("Email Already Exists!");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    user = await User.create({
        email,
        password:hashedPassword,
        fullName,
        mobileNumber,
        role,
    });

    res.status(201).json({
        message: "User Registered",
        user,
      });
});

export const login =asyncHandler(async (req,res)=>{
    const {email,password } = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const user = await User.findOne({email});

    if (!user) {
        res.status(400);
        throw new Error("Invalid email or password");
      }

    const comparePassword = await bcrypt.compare(password, user.password);

    if(!user || !comparePassword){
        res.status(400);
        throw new Error("Invalid Email or password");
    }

    res.status(200).json({
        message:"Login Succesfull",
        user
    });
});

