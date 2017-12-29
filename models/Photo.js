const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
	uri: String
});

mongoose.model('photos', photoSchema);
