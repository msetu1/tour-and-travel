import catchAsync from '../../utils/catchAsync';
import { UserService } from './user.service';

//create user Controller section
const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUser(req.body);
  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

// all user
const allUsers = catchAsync(async (req, res) => {
  const result = await UserService.allUsers();

  res.status(200).json({
    success: true,
    message: 'All User retrieved successfully',
    data: result,
  });
});

// Single user
const singleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.singleUser(id);
  res.status(200).json({
    success: true,
    message: 'Single User retrieved successfully',
    data: result,
  });
});

// update user
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await UserService.updateUser(id, body);
  res.status(200).json({
    success: true,
    message: ' User Updated successfully',
    data: result,
  });
});

// delete user
const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.deleteUser(id);
  res.status(200).json({
    success: true,
    message: 'User Deleted successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
};
