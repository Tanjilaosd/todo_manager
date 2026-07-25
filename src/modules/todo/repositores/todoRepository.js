import { todo } from "../models/todoModel"

export const createRepository = () => {
    return {
        create: async todoData => {
            try {
               const todo = await todo.create(todoData) 
               return{
                todo
               }
            } catch (error) {
                console.error(error)
            }
        }
    }
}