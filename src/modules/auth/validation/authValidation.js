import { z } from "zod";
import { register } from "./../controllers/authController.js";
import { validation } from "./../../../shared/constant.js";

const emailField = z
  .string()
  .trim()
  .min(1, "please provide an email")
  .toLowerCase()
  .max(100, "email address is too long")
  .pipe(z.email("Please provide a valid email"));

const passwordField = z
  .string()
  .min(
    validation.passwordMinLength,
    `Password must be at least ${validation.passwordMinLength} characters`,
  )
  .max(120, "Password cannot exceed 120 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^a-zA-Z0-9]/, "Password must contain at least one number");

export const registerSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, "Name is required")
      .max(50, "Name cannot exceed 50 characters"),

    email: emailField,
    password: passwordField,
  }),
});


export const loginSchema = z.object({
  body: z.object({
    
    email: emailField,
    password: z.string().min(1,"password is required").max(120,'password cannot exced 120 characters')

  }),
});
