const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const util = require('./util')

const app = express();

dotenv.load();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.listen(app.get('port'));

app.use(express.static(__dirname +'/client'))

app.post('/login', (req, res) => {
  util.check(req, res, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
});
