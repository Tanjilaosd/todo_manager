import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoDb is successfully connected")
    } catch (error) {
        console.error(`mongodb connection is failed ${error.message}`)
        throw error
        
    }
}