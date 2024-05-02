import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true,
  }],
  isGroup: {
    type: Boolean,
    default: false,
  },
  admins: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true,
  }],
  active: {
    type: Boolean,
    default: true,
  },
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;