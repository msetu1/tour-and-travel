import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'], // Custom error message
    minlength: [3, 'Name must be at least 3 characters long'], // Minimum length validation
    maxlength: [50, 'Name must not exceed 50 characters'], // Maximum length validation
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [18, 'Age must be at least 18'], // Minimum value
    max: [100, 'Age must not exceed 100'], // Maximum value
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    immutable: true,
  },
  photo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: "Role must be either 'user' or 'admin'",
    },
    required: [true, 'Role is required'],
  },
  userStatus: {
    type: String,
    enum: {
      values: ['active', 'isActive'],
      message: "User status must be 'active' or 'isActive'",
    },
    required: [true, 'User status is required'],
  },
});

// pre and post hooks
// userSchema.pre('find', function (this, next) {
//   this.find({ userStatus: { $eq: 'isActive' } });
//   next();
// });

// userSchema.post('find',function(docs,next){
//   docs.forEach((doc:IUser)=>{
//     doc.name=doc.name.toLowerCase();
//     next();
//   })
// })

export const User = model<IUser>('User', userSchema);
