import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validate';

const router = express.Router();

//create user
router.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedBody = await UserValidation.userValidateSchema.parseAsync(
        req.body,
      );
      req.body = parsedBody;
      next();
    } catch (error) {
      next(error);
    }
  },
  UserController.createUser,
);

// single user
router.get('/:id', UserController.singleUser);

// update user
router.put('/:id', UserController.updateUser);

// delete user
router.delete('/:id', UserController.deleteUser);

// All users
router.get('/', UserController.allUsers);

export const UserRoute = router;
