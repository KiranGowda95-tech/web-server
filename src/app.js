const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('hello express');
});
app.get('/help', (req, res) => {
  res.send('welocome to help page');
});
app.get('/about', (req, res) => {
  res.send('welcome to About page ');
});
app.get('/weather', (req, res) => {
  res.send('welcome to weather page');
});

app.listen(3000, () => {
  console.log('server is up and running on 3000 port');
});
