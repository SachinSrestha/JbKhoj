import asyncHandler from "express-async-handler";
import {Job} from "../models/jobModel.js";
import {User} from "../models/userModel.js";

export const postJob = asyncHandler(async(req,res)=>{
    const {title, description, salary, requirements, location , jobType, position, experience , companyId} = req.body;
    const user = req.user._id;

    if(!title || ! salary || !requirements || !location || !jobType || !position || !companyId){
        res.status(400);
        throw new Error("All Fields are Mandatory!");
    }
    
    const userId = req.user._id;
    const requirementsArray = requirements?.toString().split(",");

    // if(!user.profile.company.includes(companyId)){
    //     res.status(400);
    //     throw new Error("Not Authorized fot this company");
    // }

    const job = await Job.create({
        title,
        salary:Number(salary),
        description,
        requirements:requirementsArray,
        experience:Number(experience),
        position,
        jobType,
        location,
        company:companyId,
        created_by:userId
    })

    await job.save();

    res.status(200).json({
        message:"Job Posted Succesfully"
    })

})

export const getAllJobs = asyncHandler(async (req,res)=>{
    const keyword = req.query.keyword || "";
    const query ={
        $or :[
            {title :{$regex:keyword , $options:"i"}},
            {description :{$regex:keyword , $options:"i"}},
        ]
    };
    const jobs = await Job.find(query);

    if(!jobs || jobs.length ===0){
        res.status(404);
        throw new Error("No jobs found");
    }

    res.status(200).json({jobs});
})