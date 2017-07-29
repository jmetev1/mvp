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

app.post('/submit', (req, res) => {
  util.add(req, res, (some) => {
    res.send(some);
  });
});

app.get('/getPools', (req, res) => {
  util.get(req, res, (data) => {
    console.log(data.length, 'from call from server')
    res.send(data);
  });
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
