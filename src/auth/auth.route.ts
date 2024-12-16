import express from 'express';
import { AuthController } from './auth.controller';
import { validateRequest } from '../middleware/validateRequest';
import { UserValidation } from '../module/user/user.validate';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidateSchema),
  AuthController.register,
);
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.login,
);

export const AuthRoute = router;
