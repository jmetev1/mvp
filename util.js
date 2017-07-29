const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.load();

const mongoDB = `mongodb://cain:${process.env.DBPW}@ds127783.mlab.com:27783/poolmap`;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;
const PoolSchema = new Schema({
  username: String,
  review: String,
  lat: Number,
  lng: Number,
});
const PoolModel = mongoose.model('PoolModel', PoolSchema);


// PoolModel.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// PoolModel.create({
//   username: 'jacques',
//   review: 'too cold',
//   lat: -31.710751211269365,
//   lng: 121.64087469689548,
// });
exports.add = (req, res, cb) => {
  console.log(req.body, 'in utility')
  PoolModel.create(req.body, (reply) => {
    console.log(reply, 'in util success')
    cb(reply);
  });
};
exports.get = (req, res, cb) => {
  PoolModel.find((err, pools) => {
    if (err) {
      console.error(err);
    }
    // console.log(pools, 'in util get');
    cb(pools);
  });
  // cb(null, req.body);
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
