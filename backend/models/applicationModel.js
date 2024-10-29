import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
    // company:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'Company',
    //     required:true
    // },
    // skills:[{
    //     type:String,
    //     required:true
    // }]
}, {timeseries:true});

export const Application= mongoose.model('Application', applicationSchema);