const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.load();
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));

app.use(express.static(__dirname +'/client'))
// Set up default mongoose connection
const mongoDB = `mongodb://cain:${process.env.DBPW}@ds127783.mlab.com:27783/poolmap`;
// don't commit password
mongoose.connect(mongoDB);

// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  password: String,
});
const UserModel = mongoose.model('UserModel', UserSchema);
const UserOrCollection = new UserModel({
  username:'Cain',
  password: 'Cain'
})
UserOrCollection.save((err, created)=> {
  if (err) {
    console.log(err);
  }
  // console.log(created);
})
UserModel.create({
  username: 'jacques',
  password: 'woah'
}, (err, instance) => {
  if (err) return handleError(err) 
  console.log(instance);
})
// const allUsers = mongoose.model('Users', UserSchema);
// allUsers.find({'username': 'Cain'},
// 'username password', (err, result)=> {
//   if (err) console.log(err)
//   else {
//     console.log(result, 'is search return')
//   }
// });
UserModel.find((err, user) => {
  console.log('inside find');
  if (err){
    console.error(err)
  } 
  console.log(user, 'this is finidng');
})

