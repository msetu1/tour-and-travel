import {z} from 'zod';
const userValidateSchema=z.object({
    name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(50, { message: 'Name must not exceed 50 characters' }),
  age: z
    .number()
    .min(18, { message: 'Age must be at least 18' })
    .max(100, { message: 'Age must not exceed 100' }),
  email: z
    .string()
    .email('Please enter a valid email address'),
  photo: z
    .string()
    .min(1, { message: 'Photo is required' })
});

export const UserValidation={
    userValidateSchema
}