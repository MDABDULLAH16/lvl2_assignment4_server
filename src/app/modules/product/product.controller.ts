// src/app/modules/product/product.controller.ts
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';
const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await productServices.createProductInDB(productData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});
export const getAllProducts = catchAsync(async (req, res) => {
  const { name } = req.query;

  // Fetch all products or search by name
  const products = await productServices.getAllProductsFromDB(name as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: name
      ? `Products with name '${name}' retrieved successfully`
      : 'All products retrieved successfully',
    data: products,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
});
const updateProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await productServices.updateProductById(id, updateData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const productController = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProductById,
};
