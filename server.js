var express = require('express');

var app = express();
var port = 8080;
// app.listen(port,'http://localhost', () => {
//   console.log('Server now listening on port ' + port);
// });
app.listen(port)

app.use(express.static(__dirname +'/client'))
