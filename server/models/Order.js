const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    userName: {type: String, required: true, max: 100},
    userID: String,
    choice: [],
    updated: { type: Date, default: Date.now },
  }
);


module.exports = mongoose.model('Order', OrderSchema);