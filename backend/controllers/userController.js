import asyncHandler from 'express-async-handler';
import {User} from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import bcrypt from "bcrypt"
import {generate_jwt} from "../utils/generateToken.js"

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

    generate_jwt(user._id,res);
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

    generate_jwt(user._id,res);
    res.status(200).json({
        message:"Login Succesfull",
        user
    });
});

export const logout = asyncHandler(async (req,res)=>{
    res.cookie("token", "", {
        maxAge:0,
        httpOnly:true,
        sameSite:"strict",
    });

    res.status(200).json({
        message:"Logout Succesfull"
    });
});

export const updateProfile = asyncHandler(async (req,res)=>{
    const userId = req.user._id;
    let user = await User.findById(userId);
    const {fullName, email, mobileNumber, bio, skills } = req.body; 

    const skillsArray = skills?.toString().split(",");

    if(!user){
        res.status(404);
        throw new Error("No user found");
    }

    if(fullName) user.fullName = fullName;
    if(email) user.email = email;
    if(mobileNumber) user.mobileNumber = mobileNumber;
    if(bio) user.profile.bio = bio;
    if(skills) user.profile.skills = skillsArray;

    await user.save();
    
    res.status(200).json({message:"Profile Updated Successfully"});
})

