import mongoose from 'mongoose';

const attachmentLogSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sentAt: {
    type: Date,
    required: true,
  },
  receivedAt: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['sending', 'sent'],
    default: 'sending',
  },
})