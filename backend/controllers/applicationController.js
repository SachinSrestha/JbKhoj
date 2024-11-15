import asyncHandler from "express-async-handler";
import { Application} from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";

export const applyJob = asyncHandler(async (req,res)=>{
    const applicantId = req.user._id;
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if(!jobId){
        res.status(403);
        throw new Error("Job ID Required!");
    }

    const existingApplication = await Application.findOne({job:jobId, applicant:applicantId});
    if(existingApplication){
        res.status(400);
        throw new Error("Already applied to the job");
    }

    if(!job){
        res.status(404);
        throw new Error("No job found");
    }

    const application = await Application.create({
        applicant:applicantId,
        job:jobId,
    })

    job.applications.push(application._id);
    await application.save();
    await job.save();

    res.status(200).json({
        message:"Applied to the job succesfully",
        success:true
    });
})

export const getAppliedJobs = asyncHandler(async (req,res)=>{
    const userId = req.user._id;
    const applications = await Application.find({applicant:userId}).populate({path:"job", populate:{path:"company",options:{sort:{createdAt:-1}}}}).sort({createdAt:-1});

    if(!applications){
        res.status(404);
        throw new Error("No applied jobs!");
    }

    res.status(200).json({applications,success:true});
})

export const getApplicants = asyncHandler(async (req,res)=>{
    const jobId = req.params.id;
    const job = await Job.findById(jobId).sort({createdAt:-1}).select("title").populate({
        path:"applications",
        options:{sort:{createdAt:-1}},
        populate:{
            path:"applicant"
        }
    });

    if(!job){
        res.status(404);
        throw new Error("No job found");
    }

    res.status(200).json({job, success:true});
})

export const updateStatus = asyncHandler(async (req,res)=>{
    const {status} =req.body;
    const userId = req.user._id;
    const applicationId = req.params.id;

    let application = await Application.findById(applicationId);

    const jobId = application.job;
    const job = await Job.findById(jobId)

    if(!status){
        res.status(400);
        throw new Error("Status is Required!");
    }

    if(!application){
        res.status(404);
        throw new Error("No application found!");
    }

    if(job.created_by.toString() !== userId.toString()){
        res.status(403);
        throw new Error("UnAuthorized!");
    }

    application.status = status.toLowerCase();

    await application.save();

    res.status(200).json({
        message:"Status Updated Succesfully.",
        success:true
    })
})