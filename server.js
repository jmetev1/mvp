const express = require('express');
const dotenv = require('dotenv');
const util = require('./util')

const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname +'/client'))
dotenv.load();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json())
app.listen(app.get('port'));

let storage = [];
app.post('/submit', (req, res) => {
  storage.push(req.body)
  storage.forEach(pool => console.log(pool));
  // console.log(req.body, 'req.body')
});

app.get('/getPools', (req, res) => {
  res.send(storage);
});

app.post('/login', (req, res) => {
  util.check(req, res, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
});
