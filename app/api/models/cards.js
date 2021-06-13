const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
	cardNumber: {
		type: String,
		trim: true,		
		required: true,
	},
	cvv: {
		type: String,
		trim: true,
		required: true
	},
	cardName: {
		type: String,
		trim: true,
		required: true
	},
	username: {
		type: String,
		trim: true,
		required: true
	},
	cardType: {
		type: String,
		trim: true,
		required: true
	},
	cardExpDate: {
		type: String,
		trim: true,
		required: true
	}
	
});

module.exports = mongoose.model('Card', CardSchema)