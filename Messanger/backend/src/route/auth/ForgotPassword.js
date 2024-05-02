import express from 'express';
import ForgotPasswordController from '../../controllers/auth/ForgotPasswordController.js';

const resetPassword = express.Router();

resetPassword.get(
  '/',
  ForgotPasswordController.getResetPassword);

resetPassword.post(
  '/',
  ForgotPasswordController.postResetPassword);

export default resetPassword;