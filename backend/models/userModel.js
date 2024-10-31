import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required :true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:['student', 'recruiter'],
        required:true
    },
    profile:{
        bio:{
            type:String
        },
        skills:{
            type:[{type:String}]
        },
        resume:{
            type:String
        },
        resumeOriginalName:{
            type:String
        },
        profilePhoto:{
            type:String,
            default:""
        },
        company:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        }]
    }
}, {timestamps:true});

export const User = mongoose.model('User', userSchema);