import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    },
    coverLetter:{
        type:String,
        default:''
    },
    aiAnalysis:{
        tone: { type: String, default: '' },
        confidence: { type: String, default: '' },
        keySkillsMentioned: { type: [String], default: [] },
        summary: { type: String, default: '' }
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);