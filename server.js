var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

// var port = 8080;
app.listen(app.get('port'));
// app.get('/', function(req, res){
//   res.send('hello world');
// });

app.use(express.static(__dirname +'/client'))
