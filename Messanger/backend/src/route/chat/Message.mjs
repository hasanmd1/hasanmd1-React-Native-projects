import express from 'express';

const messageHandler = express.Router();

messageHandler.get('/', (req, res) => {
  res.send('MessagePage!');
});

messageHandler.post('/', (req, res) => {
  res.send('MessagePostPage!');
});

messageHandler.put('/', (req, res) => {
  res.send('MessagePutPage!');
});

messageHandler.delete('/', (req, res) => {
  res.send('MessageDeletePage!');
})

export default messageHandler;