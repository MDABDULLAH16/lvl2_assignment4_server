import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';

const createUserReq = catchAsync(async (req, res) => {
  const user = req.body;
  const isUserExist = await userServices.findByEmailFromDB(user.email);
  if (isUserExist) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'user already exist',
      data: null,
    });
  }

  const result = await userServices.createUserIntoDB(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create successfully',
    data: result,
  });
});

const getAllUserReq = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrieved successfully',
    data: result,
  });
});

export const userController = {
  createUserReq,
  getAllUserReq,
};
