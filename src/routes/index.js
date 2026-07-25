import { Router } from "express";
import { authRoutes } from "../modules/auth/routes/authRoutes.js";
import { todoRouter } from "../modules/todo/routes/todoRoutes.js";
export const router = Router()

router.use('/auth',authRoutes)
router.use('/todos',todoRouter)