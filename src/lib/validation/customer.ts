import { z } from "zod";
import { indianPhoneRegex } from "./booking";

export const sendOtpSchema = z.object({
  mobile: z
    .string()
    .regex(indianPhoneRegex, "Enter a valid 10-digit Indian mobile number"),
});

export const verifyOtpSchema = z.object({
  mobile: z
    .string()
    .regex(indianPhoneRegex, "Enter a valid 10-digit Indian mobile number"),
  otp: z.string().regex(/^\d{6}$/, "OTP must be a 6-digit number"),
});

export const updateCustomerProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
});

export type SendOtpInput = z.infer<typeof sendOtpSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
export type UpdateCustomerProfileInput = z.infer<
  typeof updateCustomerProfileSchema
>;
