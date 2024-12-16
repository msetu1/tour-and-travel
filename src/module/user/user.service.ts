import { IUser } from './user.interface';
import { User } from './user.model';

// create user Service section
const createUser = async (playLoad: IUser): Promise<IUser> => {
  playLoad.role = 'admin';
  const result = await User.create(playLoad);
  return result;
};

// all user
const allUsers = async () => {
  const result = await User.find();
  return result;
};

// Single user
const singleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

// update user
const updateUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete user
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUser,
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
};
