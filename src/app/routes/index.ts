import { Router } from 'express';

import { productRoute } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
// moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
