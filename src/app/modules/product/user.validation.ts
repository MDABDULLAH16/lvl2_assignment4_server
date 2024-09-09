import { z } from 'zod';

// Zod validation schema
export const createUserSchema = z.object({
  name: z.string().min(2, 'Name should be at least 2 characters long'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password should be at least 6 characters long'),
  phone: z.string().regex(/^\d+$/, 'Phone number should contain only digits'),
  role: z.enum(['admin', 'user']),
  address: z.string().min(10, 'Address should be at least 10 characters long'),
});

export const updateUserSchema = createUserSchema.partial(); // For update, all fields are optional
