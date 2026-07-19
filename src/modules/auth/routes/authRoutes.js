import  { Router } from 'express';
import { register } from '../controllers/authController.js';
import { validate } from './../../../middlewares/validateMiddleware.js';
import { registerSchema } from '../validation/authValidation.js';
export const authRoutes = Router()
authRoutes.post ('/register',validate(registerSchema),register)
