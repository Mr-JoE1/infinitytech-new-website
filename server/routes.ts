import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertContactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        id: contactSubmission.id,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message,
        });
      } else {
        // Handle other errors
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request.",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
