const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    userName: String,
    userID: String,
    choice: [],
    updated: { type: Date, default: Date.now },
    paid: {
      date: Date,
      card: Boolean,
      bank: String
    }
  }
);


module.exports = mongoose.model('Order', OrderSchema);