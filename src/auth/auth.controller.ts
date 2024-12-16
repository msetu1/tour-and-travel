import catchAsync from '../utils/catchAsync';
import { AuthService } from './auth.service';

const register = catchAsync(async (req, res) => {
  const result = await AuthService.register(req.body);

  res.status(200).json({
    success: true,
    message: 'Register created successfully',
    data: result,
  });
});
const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  res.status(200).json({
    success: true,
    message: 'Login created successfully',
    token: result.token,
    data: result.verifiedData,
  });
});

export const AuthController = {
  register,
  login,
};
