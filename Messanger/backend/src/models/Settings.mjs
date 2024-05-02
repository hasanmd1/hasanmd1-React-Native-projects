import mongoose from 'mongoose';

const userSettingsSchema = new mongoose.Schema ({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mode: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light',
  },
  notification: {
    type: Boolean,
    default: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  privacy: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
})