const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getTomorrow = () => { //return tomorrow 
  const today    = new Date(),
        tomorrow = new Date();
  tomorrow.setDate(today.getDate()+1);
  return tomorrow.toISOString().split('T')[0];
}

const getToday = () => { //return tomorrow 
  const today = new Date();
  return today.toISOString().split('T')[0];
}

const MenuSchema = new Schema(
  {
    menu: [],
    created: { type: Date, default: getToday() },
    created_for: { type: Date, default: getTomorrow() } 
  }
);


module.exports = mongoose.model('menu', MenuSchema);


/**
 * @var menu 
 *  [
 *    {
 *      name: @string
 *      price: @string
 *      variants: [@string,@string...]
 *    }
 *  ]
 * 
 * 
 */