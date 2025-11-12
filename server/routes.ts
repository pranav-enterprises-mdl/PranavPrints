import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertFileUploadSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const result = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      // Store the submission
      const submission = await storage.createContactSubmission(result.data);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to process your request. Please try again."
      });
    }
  });

  // File upload submission endpoint
  app.post("/api/file-uploads", async (req, res) => {
    try {
      // Validate request body
      const result = insertFileUploadSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      // Store the file upload metadata
      const upload = await storage.createFileUpload(result.data);
      
      res.status(201).json({ 
        success: true, 
        message: "File upload submitted successfully",
        id: upload.id
      });
    } catch (error) {
      console.error("Error processing file upload:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to process your request. Please try again."
      });
    }
  });


  const httpServer = createServer(app);

  return httpServer;
}
