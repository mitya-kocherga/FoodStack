const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    userName: String,
    userID: String,
    choice: [],
    updated: { type: Date, default: Date.now },
  }
);


module.exports = mongoose.model('Order', OrderSchema);