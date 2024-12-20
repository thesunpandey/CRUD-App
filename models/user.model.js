import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\+?[0-9]{10,15}$/, 'Please enter a valid phone number'],
  },
  image: { type: String }, // Removed match validation for URLs
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: [true, 'Role is required'],
  },
});

const User = mongoose.model('User', userSchema);

export default User;