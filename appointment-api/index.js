const router = require('express').Router();

const Inputs = require('./inputs-model.js');

router.get('/', (req, res) => {
  Inputs.find()
  .then(inputs => {
    res.json(inputs);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get inputs' });
  });
});