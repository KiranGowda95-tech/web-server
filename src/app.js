const path = require('path');
const express = require('express');

console.log(__dirname);
console.log();
const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));
app.get('', (req, res) => {
  res.render('index', {
    title: 'weather app',
    name: 'Kiran',
  });
});

app.get('', (req, res) => {
  res.send('hello express');
});

app.get('/weather', (req, res) => {
  res.send({
    forcast: 'its raining',
    location: 'bangalore',
  });
});

app.listen(3000, () => {
  console.log('server is up and running on 3000 port');
});
