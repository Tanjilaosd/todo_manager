import { todo } from "../models/todoModel"
import { createRepository } from "../repositores/todoRepository"

export const todoService = (todoRepository=createRepository()) => {
    return {
        create:async (todoData) => {
            try {
                return await todoRepository.create(todo)

                
            } catch (error) {
                console.error(object)
                
            }
        }
    }
}