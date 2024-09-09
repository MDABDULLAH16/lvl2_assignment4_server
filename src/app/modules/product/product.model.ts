import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  stock: { type: Number, required: true },
  images: { type: String },
});

export const Product = mongoose.model('Product', productSchema);
