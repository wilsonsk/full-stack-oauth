const mongoose = require('mongoose');
const PlayerSchema = require('./Player');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String ,
	team: {
		pitcher: [PlayerSchema],
		catcher: [PlayerSchema],
		firstbase: [PlayerSchema],
		secondbase: [PlayerSchema],
		thirdbase: [PlayerSchema],
		shortstop: [PlayerSchema],
		outfield: [PlayerSchema]

	},
	credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
