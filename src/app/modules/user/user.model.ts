import { model, Schema } from 'mongoose';
import { TUserDetails } from './user.interface';

const userDetailsSchema = new Schema<TUserDetails>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,

      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ['user', 'admin'],
        message: "{VALUE} can't be a role",
      },
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUserDetails>('User', userDetailsSchema);
