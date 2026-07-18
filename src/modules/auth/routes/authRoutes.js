import  { Router } from 'express';
import { register } from '../controllers/authController';
import { validate } from './../../../middlewares/validateMiddleware';
import { registerSchema } from '../validation/authValidation';
export const authRoutes = Router()
authRoutes.post ('/register',validate(registerSchema),register)
