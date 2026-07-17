import mongoose from "mongoose"
import { env } from "./env"

export const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGODB_URL)
        console.log("mongoDb is successfully connected")
    } catch (error) {
        console.error(`mongodb connection is failed ${error.message}`)
        throw error
        
    }
}