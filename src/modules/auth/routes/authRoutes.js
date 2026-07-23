import  { Router } from 'express';
import { login, register } from '../controllers/authController.js';
import { validate } from './../../../middlewares/validateMiddleware.js';
import { loginSchema, registerSchema } from '../validation/authValidation.js';
export const authRoutes = Router()
authRoutes.post ('/register',validate(registerSchema),register)
authRoutes.post('/login',validate(loginSchema),login)
