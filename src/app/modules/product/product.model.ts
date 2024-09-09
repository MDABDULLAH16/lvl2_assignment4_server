import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
  category: {
    type: [String],
    required: [true, 'At least one category is required'],
    validate: {
      validator: function (v: string[]) {
        return v.length > 0;
      },
      message: 'At least one category is required',
    },
  },
  description: {
    type: String,
    required: [true, 'describe about product'], // Optional field, no custom message needed
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: [0, 'Stock cannot be negative'],
  },
  images: {
    type: String,
    required: [true, 'Image URL is required'],
  },
});

export const Product = model<TProduct>('Product', productSchema);
