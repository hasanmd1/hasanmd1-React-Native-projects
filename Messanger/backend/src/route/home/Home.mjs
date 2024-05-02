import express from 'express';

const startRedirection = express.Router();

startRedirection.get('/', (req, res) => {
  res.send('HomePage!');
}); //, HomeController.getHome

export default startRedirection;