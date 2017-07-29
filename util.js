const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.load();

const mongoDB = `mongodb://cain:${process.env.DBPW}@ds127783.mlab.com:27783/poolmap`;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.check = (req, res, cb) => {
  cb(null, req.body);
};

// const Schema = mongoose.Schema;
// const UserSchema = new Schema({
//   username: String,
//   password: String,
// });
// const UserModel = mongoose.model('UserModel', UserSchema);
// const UserOrCollection = new UserModel({
//   username:'Cain',
//   password: 'Cain'
// })
// UserOrCollection.save((err, created)=> {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(created);
// })
// UserModel.create({
//   username: 'jacques',
//   password: 'woah'
// }, (err, instance) => {
//   if (err) return handleError(err) 
//   console.log(instance);
// })

// UserModel.find((err, user) => {
//   console.log('inside find');
//   if (err){
//     console.error(err)
//   } 
//   console.log(user, 'this is finidng');
// })
