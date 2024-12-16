import { IUser } from '../module/user/user.interface';
import { User } from '../module/user/user.model';

const register = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
export const AuthService = {
  register,
};
