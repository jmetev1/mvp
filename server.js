var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));

app.use(express.static(__dirname +'/client'))

//Set up default mongoose connection
var mongoDB = 'mongodb://cain:cain@ds127783.mlab.com:27783/poolmap';
//don't commit password
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));