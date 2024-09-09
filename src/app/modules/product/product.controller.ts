import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product get successfully',
    data: result,
  });
});
const getSingleAllProducts = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product single get successfully',
    data: result,
  });
});

export const productController = {
  getAllProducts,
  getSingleAllProducts,
};
