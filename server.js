var express = require('express');

var app = express();
const env = Object.assign({}, process.env, {PORT: 5000});

app.set('port', (process.env.PORT || 5000));

// var port = 8080;
// app.listen(port)

app.use(express.static(__dirname +'/client'))
