import { TUserDetails } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (user: TUserDetails) => {
  const result = await User.create(user);
  return result;
};
const findByEmailFromDB = async (email: string) => {
  const result = User.findOne({ email });
  return result;
};
const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  findByEmailFromDB,
};
