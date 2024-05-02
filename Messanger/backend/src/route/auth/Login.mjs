import express from 'express';
import LoginController from '../../controllers/auth/LoginController.js';

const logger = express.Router();

logger.get(
  '/',
  LoginController.getLoginRequest);

logger.post(
  '/',
  LoginController.postLoginRequest);

export default logger;

