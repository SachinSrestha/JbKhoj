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
        job,
        message:"Job Posted Succesfully",
        success:true
    })

})

//For students
export const getAllJobs = asyncHandler(async (req,res)=>{
    const keyword = req.query.keyword || "";
    const query ={
        $or :[
            {title :{$regex:keyword , $options:"i"}},
            {description :{$regex:keyword , $options:"i"}},
        ]
    };
    const jobs = await Job.find(query).populate({path:"company"}).sort({createdAt:-1});

    if(!jobs || jobs.length ===0){
        res.status(404);
        throw new Error("No jobs found");
    }

    res.status(200).json({jobs,success:true});
})

//For students
export const getJobById = asyncHandler(async(req,res)=>{
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({path:"company"}).populate({path:"applications"}).sort({createdAt:-1});

    if(!job){
        res.status(404);
        throw new Error("No job found!");
    }

    res.status(200).json({job,success:true});
})

//For admin
export const getAdminJobs = asyncHandler(async (req,res)=>{
    const userId = req.user._id;
    const jobs = await Job.find({created_by:userId}).populate({path:"company"});

    if(!jobs){
        res.status(404);
        throw new Error("No jobs found!");
    }

    res.status(200).json({jobs,success:true});
})