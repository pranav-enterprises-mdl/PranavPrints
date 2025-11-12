import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Customer testimonials
export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  customerRole: text("customer_role").notNull(),
  companyName: text("company_name"),
  rating: varchar("rating", { length: 1 }).notNull(), // 1-5
  testimonialText: text("testimonial_text").notNull(),
  serviceUsed: text("service_used").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
}).extend({
  customerName: z.string().min(2, "Customer name must be at least 2 characters"),
  customerRole: z.string().min(2, "Role must be at least 2 characters"),
  companyName: z.string().optional(),
  rating: z.enum(["1", "2", "3", "4", "5"]),
  testimonialText: z.string().min(10, "Testimonial must be at least 10 characters"),
  serviceUsed: z.string().min(2, "Service must be specified"),
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// File uploads for customer design submissions
export const fileUploads = pgTable("file_uploads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone").notNull(),
  serviceType: text("service_type").notNull(),
  fileName: text("file_name").notNull(),
  fileSize: varchar("file_size").notNull(), // Store as string (e.g., "2.5 MB")
  fileType: text("file_type").notNull(), // MIME type
  notes: text("notes"),
  uploadedAt: timestamp("uploaded_at").defaultNow().notNull(),
});

export const insertFileUploadSchema = createInsertSchema(fileUploads).omit({
  id: true,
  uploadedAt: true,
}).extend({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerEmail: z.string().email("Please enter a valid email"),
  customerPhone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  fileName: z.string().min(1, "File name is required"),
  fileSize: z.string().min(1, "File size is required"),
  fileType: z.string().min(1, "File type is required"),
  notes: z.string().optional(),
});

export type InsertFileUpload = z.infer<typeof insertFileUploadSchema>;
export type FileUpload = typeof fileUploads.$inferSelect;
