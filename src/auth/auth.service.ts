import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../module/user/user.interface';
import { User } from '../module/user/user.model';
import { ILoginUser } from './auth.interface';

const register = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new Error('User not found');
  }

  const userStatus = user?.userStatus;

  if (userStatus === 'inActive') {
    throw new Error('User is not active');
  }

  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!isPasswordMatch) {
    throw new Error('Password is not correct');
  }

  const token = jwt.sign({ email: user?.email, role: user?.role }, 'secret', {
    expiresIn: '1d',
  });

  const verifiedData = {
    name: user?.name,
    age: user?.age,
    email: user?.email,
    password: user?.password,
    photo: user?.photo,
    role: user?.role,
    userStatus: user?.userStatus,
  };

  return { token, verifiedData };
};
export const AuthService = {
  register,
  login,
};
