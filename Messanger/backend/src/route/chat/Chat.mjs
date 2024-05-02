import express from 'express';

const chatHandler = express.Router();

chatHandler.get('/', (req, res) => {
  res.send('ChatPage!');
});



chatHandler.delete('/', (req, res) => {
  res.send('ChatDeletePage!');
})

export default chatHandler;