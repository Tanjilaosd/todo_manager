import express from 'express'
import { todo } from '../models/todoModel'
import { validate } from './../../../middlewares/validateMiddleware';
import { createTodoSchema } from './../services/todoValidation';

 export const todoRouter = express.Router()

 todoRouter.post("/create",validate(createTodoSchema),createTodoSchema)

