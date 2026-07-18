import { z } from "zod";
import { register } from "./../controllers/authController";
import { validation } from "./../../../shared/constant";

export const registerSchema = z.object({
  body: z.object({
    name: z.string
      .trim()
      .min(1, "Name is required")
      .max(50, "Name cannot exceed 50 characters"),

    email: z
      .string()
      .trim()
      .min(1, "please provide an email")
      .toLowerCase()
      .max(100, "email address is too long")
      .pipe(z.email("Please provide a valid email")),
    password: z
      .string()
      .min(
        validation.passwordMinLength,
        `Password must be at least ${validation.passwordMinLength} characters`,
      )
      .max(120, "Password cannot exceed 120 characters")
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0_9]/,"Password must contain at least one number")
      .regex(/[^a-zA-Z0-9]/,'Password must contain at least one number')

  }),
});
