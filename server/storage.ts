import { users, contactSubmissions, fileUploads, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type FileUpload, type InsertFileUpload } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createFileUpload(upload: InsertFileUpload): Promise<FileUpload>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async createFileUpload(insertUpload: InsertFileUpload): Promise<FileUpload> {
    const [upload] = await db
      .insert(fileUploads)
      .values(insertUpload)
      .returning();
    return upload;
  }
}

export const storage = new DatabaseStorage();
