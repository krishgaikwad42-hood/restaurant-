import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
    full_name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const reservationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    date: z.string().refine((date) => new Date(date) >= new Date(), {
        message: "Date cannot be in the past",
    }),
    time: z.string().min(1, "Time is required"),
    guests: z.number().min(1, "At least 1 guest is required").max(20, "Max 20 guests"),
});

export const menuItemSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    price: z.number().positive("Price must be positive"),
    category: z.enum(["Starter", "Main Course", "Dessert", "Drinks"]),
    image_url: z.string().url().optional().or(z.literal("")),
    available: z.boolean().default(true),
});
