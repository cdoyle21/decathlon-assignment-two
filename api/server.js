const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/data.json');

app.use(cors());

const homepage = data.homepage;

app.get('/homepage', (req, res) => {
  res.json(homepage);
});

app.listen(4001, () => {
  console.log('Example app listening on port 4001!');
});