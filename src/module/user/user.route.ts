import express from 'express';
import { UserController } from './user.controller';

const router =express.Router();

//create user
router.post('/create-user',UserController.createUser);

// single user
router.get('/:id',UserController.singleUser);

// update user
router.put('/:id',UserController.updateUser);

// delete user
router.delete('/:id',UserController.deleteUser);

// All users
router.get('/',UserController.allUsers);

export const UserRoute=router;