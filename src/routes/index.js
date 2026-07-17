import { Router } from "express";
import { authRoutes } from "../modules/auth/routes/authRoutes";
export const router = Router()

router.use('/auth',authRoutes)