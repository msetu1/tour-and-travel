import express from 'express';
import { AuthController } from './auth.controller';
import { validateRequest } from '../middleware/validateRequest';
import { UserValidation } from '../module/user/user.validate';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidateSchema),
  AuthController.register,
);

export const AuthRoute = router;
