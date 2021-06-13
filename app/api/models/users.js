const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	alamat: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	_id: {
		type: String,
		trim: true,
		required: true
	},
	userid: {
		type: String,
		trim: true,
		required: true
	},
	apppin: {
		type: String,
		trim: true,
		required: true
	},
	device: {
		type: String,
		trim: true,
		required: true
	},
	card: {
		type: String,
		trim: true,
		required: true
	},
	registereddate: {
		type: Date,
		trim: true,
		required: true
	},
	history: {
		type: String,
		trim: true,
		required: true
	},
	token: {
		type: String,
		trim: true,
		required: true
	}
});

UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('User', UserSchema);