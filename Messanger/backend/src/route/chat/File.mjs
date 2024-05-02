import express from 'express';

const fileHandler = express.Router();

fileHandler.get('/', (req, res) => {
  res.send('FilePage!');
});

fileHandler.post('/', (req, res) => {
  res.send('FilePostPage!');
});

fileHandler.put('/', (req, res) => {
  res.send('FilePutPage!');
});

fileHandler.delete('/', (req, res) => {
  res.send('FileDeletePage!');
});

export default fileHandler;