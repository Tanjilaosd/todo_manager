import mongoose from 'mongoose'
import { validation } from '../../../shared/constant.js'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
        trim: true,
        maxLength : [validation.nameMaxLength,`name cannot exceed ${validation.nameMaxLength} characters`]

    },
    email : {
        type : String,
        required: [true,'email is required'],
        trim: true,
        unique : true,
        lowercase : true,
        match: [/^\S+@\S+\.\S+$/, "please provide a valid email"],

    },
    password:{
        type: String,
        required: [true,"password is required"],
        minLength: [validation.passwordMinLength,`password must be at least ${validation.passwordMinLength} characteres`],
        select: false
    }
},{
    timestamps: true,
    versionKey:false
})

userSchema.pre("save",async function () {
    if(!this.isModified('password')) return
    console.log(validation.bcrypt_salt_roundes)
    try {
        this.password = await bcrypt.hash(this.password,validation.bcrypt_salt_roundes)

    } catch (error) {
        console.error(error)
        
    }
})

export const User = mongoose.models.User || mongoose.model("User",userSchema)