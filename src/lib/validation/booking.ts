import { z } from "zod";

export const indianPhoneRegex = /^[6-9]\d{9}$/;

export const createBookingSchema = z.object({
  netId: z.string().min(1, "Net selection is required"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD format"),
  sessionType: z.enum(["TIME", "OVERS"]),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)")
    .optional(),
  oversCount: z.number().int().positive().max(50).optional(),
  customerMobile: z
    .string()
    .regex(indianPhoneRegex, "Enter a valid 10-digit Indian mobile number"),
  customerName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100)
    .optional(),
  usePassId: z.string().optional(),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;
