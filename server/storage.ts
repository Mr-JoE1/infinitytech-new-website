import { users, type User, type InsertUser, type InsertContactForm, type ContactFormSubmission } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(data: InsertContactForm): Promise<ContactFormSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactFormSubmission>;
  userCurrentId: number;
  contactSubmissionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(data: InsertContactForm): Promise<ContactFormSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const now = new Date();
    
    // Remove the privacy field as it's not part of the ContactFormSubmission type
    const { privacy, ...contactData } = data;
    
    // Ensure company and phone are properly handled (null instead of undefined)
    const submission: ContactFormSubmission = { 
      id,
      name: contactData.name,
      email: contactData.email,
      service: contactData.service,
      message: contactData.message,
      company: contactData.company || null,
      phone: contactData.phone || null,
      createdAt: now
    };
    
    this.contactSubmissions.set(id, submission);
    console.log('Contact form submission saved:', submission);
    return submission;
  }
}

export const storage = new MemStorage();
