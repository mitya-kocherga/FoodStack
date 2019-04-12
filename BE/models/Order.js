var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema(
  {
    userName: {type: String, required: true, max: 100},
    choice: {type: String, required: true, max: 100},
  }
);


module.exports = mongoose.model('Order', OrderSchema);