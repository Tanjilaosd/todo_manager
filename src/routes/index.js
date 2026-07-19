import { Router } from "express";
import { authRoutes } from "../modules/auth/routes/authRoutes.js";
export const router = Router()

router.use('/auth',authRoutes)