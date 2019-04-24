
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
    userName: String,
    password: String,
    isAdmin : Boolean,
    
  }
);

module.exports = mongoose.model('User', UserSchema);
