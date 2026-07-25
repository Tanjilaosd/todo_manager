import { http_status } from "../../../shared/constant.js";
import { asyncHandler } from "../../auth/utila/asynchandler.js";
import { todoService } from "../services/todoService.js";

export const createTodo = asyncHandler(async(req,res) => {
    const todo = await  todoService.create(req.body)
    new ApiResponse(http_status.created,todo,'todo created successfully')

})