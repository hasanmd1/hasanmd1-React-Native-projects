import express from 'express';
import LogOutController from '../../controllers/auth/LogOutController.js';

const logoutHandler = express.Router();

logoutHandler.get(
  '/',
  LogOutController.getLogoutRequest);

export default logoutHandler;