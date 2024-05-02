import express from 'express';
import startRedirection from './home/Home.mjs';
import logger from './auth/Login.mjs';
import signer from './auth/SignUp.js';
import logoutHandler from './auth/LogOut.js';
import resetPassword from './auth/ForgotPassword.js';
import chatHandler from './chat/Chat.mjs';
import messageHandler from './chat/Message.mjs';
import stickerHandler from './chat/Sticker.mjs';
import fileHandler from './chat/File.mjs';
import profileHandler from './user/Profile.js';
import settingsHandler from './user/Settings.js';



const app = express();

app.get('/', (req, res) => {
  res.redirect('/home')
});
app.use('/home', startRedirection);

app.use('/login', logger);

app.use('/signUp', signer);

app.use('/resetPassword', resetPassword)

app.use('/logout', logoutHandler);

app.use('/chat', chatHandler);

app.use('/chat/:chatId/message', messageHandler);

app.use('/chat/:chatId/sticker', stickerHandler);

app.use('/chat/:chatId/file', fileHandler);

app.use('/user-profile', profileHandler);

app.use('/settings', settingsHandler)


export default app;