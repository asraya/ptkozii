console.log('in db config');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/kozii_db';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;