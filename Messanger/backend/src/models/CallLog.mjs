import mongoose from 'mongoose';

const callLogSchema = new mongoose.Schema ({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true,
  },
  callerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['calling', 'ringing', 'pending', 'completed', 'cancelled'],
    default: 'pending',
  },
  callType: {
    type: String,
    enum: ['audio', 'video'],
  },
  callId: {
    type: String,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
});

const CallLog = mongoose.model('CallLog', callLogSchema);
export default CallLog;