// src/app/modules/product/product.service.ts
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInDB = async (productData: TProduct) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};
// Get all products or search by name
const getAllProductsFromDB = async (name?: string) => {
  if (name) {
    // Search by name (case-insensitive)
    return await Product.find({ name: { $regex: name, $options: 'i' } });
  }

  // Return all products if no name is provided
  return await Product.find();
};

const getSingleProductFromDB = async (id: string) => {
  return await Product.findById(id);
};
const updateProductById = async (id: string, updateData: TProduct) => {
  return await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const deleteProductFromDB = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const productServices = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  createProductInDB,
  deleteProductFromDB,
  updateProductById,
};
