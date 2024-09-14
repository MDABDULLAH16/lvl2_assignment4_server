import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createUserSchemaValidation } from './user.validation';
const router = express.Router();
router.get('/', userController.getAllUserReq);
router.post(
  '/sign-up',
  validateRequest(createUserSchemaValidation),
  userController.createUserReq
);

export const userRouter = router;
