import { createAuthRepository } from "../modules/auth/repositories/authRepositories";
import { asyncHandler } from "../modules/auth/utila/asynchandler";


const userRepository = createAuthRepository()
export const protect = asyncHandler (async(req,_res,next) =>{
    const authHeader = req.headers.authorization 
    const token = authHeader.split('')[1]
    const decoded = verifyAccessToken(token)
    req.user = await userRepository.findById(decoded.id)
    next()
})