// lib/auth.ts
import { betterAuth } from 'better-auth';
import { z } from 'zod';
import Database from "better-sqlite3";

// Пока без базы, просто в памяти
const users: { email: string; passwordHash: string }[] = [];

export const auth = betterAuth({
  emailAndPassword: {  
    enabled: true
  },

  database: new Database( ("/home/logic_off/Desktop/Valltest-backend-mvp1/test.db")
  ),

  schema: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

