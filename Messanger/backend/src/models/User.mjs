import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,

  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt:{
    type: Date,
    required: true,
  },
  blocked: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const User = mongoose.model('User', userSchema);
export default User;