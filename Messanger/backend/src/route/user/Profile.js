import express from 'express';
import UserController from '../../controllers/user/UserController.mjs';


const profileHandler = express.Router();

profileHandler.get(
  '/',
  UserController.getUserProfile);

profileHandler.put(
  '/',
  UserController.putUserProfile);

profileHandler.delete(
  '/',
  UserController.deleteUserProfile);

export default profileHandler;