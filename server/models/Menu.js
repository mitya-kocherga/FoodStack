const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getTomorrow = () => { //return tomorrow 
	const today = new Date(),
		tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);
	return tomorrow
};

const MenuSchema = new Schema(
	{
		menu: [],
		created: {type: Date, default: Date.now},
		created_for: {type: Date, default: getTomorrow()}
	}
);


module.exports = mongoose.model('menu', MenuSchema);