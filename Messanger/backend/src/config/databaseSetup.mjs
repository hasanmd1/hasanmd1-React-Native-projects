import mongoose from 'mongoose';
import 'dotenv/config';

const databaseSetup = async () => {
  await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => {
      console.log('MongoDB connected');})
    .catch((err) => {
      console.log(err);});
}

export default databaseSetup;
