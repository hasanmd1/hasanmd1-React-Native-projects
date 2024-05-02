import express from 'express';

const stickerHandler = express.Router();

stickerHandler.get('/', (req, res) => {
  res.send('StickerPage!');
});

stickerHandler.post('/', (req, res) => {
  res.send('StickerPostPage!');
});

stickerHandler.put('/', (req, res) => {
  res.send('StickerPutPage!');
});

stickerHandler.delete('/', (req, res) => {
  res.send('StickerDeletePage!');
});

export default stickerHandler;