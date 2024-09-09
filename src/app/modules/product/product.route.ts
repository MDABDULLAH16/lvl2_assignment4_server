import express from 'express';
import { productController } from './product.controller';

import { createProductSchema, updateProductSchema } from './product.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post(
  '/create-product',
  validateRequest(createProductSchema),
  productController.createProduct
);
router.patch(
  '/:id',
  validateRequest(updateProductSchema),
  productController.updateProductById
);
router.get('/:id', productController.getSingleProduct);
router.delete('/:id', productController.deleteProduct);

export const productRoute = router;
