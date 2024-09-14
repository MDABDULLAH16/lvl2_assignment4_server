import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'At least one category is required'),
  description: z.string(),
  stock: z.number().nonnegative('Stock cannot be negative'),
  images: z.string().url('Images should be a valid URL'),
  benefits: z.string(),
});
export const updateProductSchema = z
  .object({
    name: z.string().min(1, 'Name cannot be empty').optional(),

    price: z.number().positive('Price must be a positive number').optional(),

    category: z.string().min(1, 'At least one category is required').optional(),
    description: z.string().optional(), // Optional description

    stock: z.number().nonnegative('Stock cannot be negative').optional(),

    images: z.string().url('Images must be a valid URL').optional(), // Optional image URL
    benefits: z.string().optional(), // Optional image URL
  })
  .partial(); // Makes all fields optional

// export const productValidationSchemas = {
//   updateProductSchema,
// };
//  createUserSchema.partial(); // For update, all fields are optional
