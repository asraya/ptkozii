const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
	userID: {
		type: String,
		trim: true,		
		required: true,
	},
	id: {
		type: String,
		trim: true,
		required: true
	},
	cardID: {
		type: String,
		trim: true,
		required: true
	},
	merchant: {
		type: String,
		trim: true,
		required: true
	},
	success: {
		type: String,
		trim: true,
		required: true
	},
	createdDate: {
		type: String,
		trim: true,
		required: true
	}
	
});

module.exports = mongoose.model('History', HistorySchema)