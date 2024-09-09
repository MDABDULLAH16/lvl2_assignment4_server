import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getSingleAllProducts);

export const productRoute = router;
