const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
	name: String,
	stats: String
});

module.exports = playerSchema;
