import mongoose from "mongoose";
import { maxLength, minLength, string, trim } from "zod";
import { validation } from "../../../shared/constant";
import { todo_status } from "../../../shared/enum";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
        trim:true,
        minLength:[1,'title cannot be empty'],
        maxLength:[validation.title_max_length,`title cannot axceed ${validation.title_max_length} characters`],
        validation:{
            validator: v => v != null && v.trim().length > 0,
            message:"title cannot be blank"
        }
    },
    status:{
        type:String,
        enum:{
            values:valid_todo_status,

             message:`status must be one of ${valid_todo_status.join(" , ")}`

        },
        default:todo_status.active
   
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }


},{
    timestamps:true,
    versionKey:false,
    toJSON:{
        transform(doc,ret){
            ret.id = ret._id.toString()
            delete ret._id

        }
    }
})


export const todo = mongoose.model.todo || mongoose.model("todo",todoSchema)