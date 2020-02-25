const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
		userName: String,
		password: String,
		isAdmin: Boolean,
		approve: {type: Boolean, default: false},
	}
);

module.exports = mongoose.model('User', UserSchema);
