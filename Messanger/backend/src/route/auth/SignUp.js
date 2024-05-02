import express from 'express';
import SignUpController from '../../controllers/auth/SignUpController.js';

const signer = express.Router();

signer.get(
  '/',
  SignUpController.getSignUp);

signer.post(
  '/',
  SignUpController.postSignUp);

export default signer;