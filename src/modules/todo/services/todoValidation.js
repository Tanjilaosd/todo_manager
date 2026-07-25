import { z } from "zod";
import { validation } from "../../../shared/constant";

export const createTodoSchema = z.object({
  body: z.object({
    title: z
      .string()
      .trim()
      .main(1, "title is required")
      .max(
        validation.title_max_length,
        `title cannot exceed ${validation.title_max_length} characters`,
      ),
    description: z.string().trim()
    .min(1,'description is required')
    .max(validation.description_max_length,`description cannot exceed ${validation.title_max_length}`),
    status:z.enum(validation,{
        message:`status must be one of ${valid_todo_status.join(', ')}`
    })
  }),
});
