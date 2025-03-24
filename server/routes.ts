import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a production environment, you would typically:
      // 1. Store the contact form submission in a database
      // 2. Send an email notification
      // 3. Perhaps create a task in a CRM system
      
      // For now, we'll just simulate success
      // In a real implementation, you'd use a service like SendGrid or connect to your database
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ 
        message: "Message received successfully",
        success: true 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      return res.status(500).json({ 
        message: "Failed to process your message. Please try again later.",
        success: false
      });
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/newsletter', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ 
        message: "Successfully subscribed to newsletter",
        success: true 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ 
        message: "Failed to subscribe. Please try again later.",
        success: false
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
