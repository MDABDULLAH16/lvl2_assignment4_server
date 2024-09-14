import { z } from 'zod';

// Zod schema for creating a user
export const createUserSchemaValidation = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  phone: z.string().trim().min(1, { message: 'Phone number is required' }),
  address: z.string().trim().min(1, { message: 'Address is required' }),
  role: z.enum(['user', 'admin']).default('user'),
});

// Zod schema for updating a user (all fields optional)
export const updateUserSchemaValidation = createUserSchemaValidation.partial();
