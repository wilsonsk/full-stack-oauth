const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String ,
	team: {
		pitcher: [{
			name: String,
			stats: String
		}],
		catcher: [{
			name: String,
			stats: String
		}],
		firstbase: [{
			name: String,
			stats: String	
		}],
		secondbase: [{
			name: String,
			stats: String
		}],
		thirdbase: [{
			name: String,
			stats: String
		}],
		shortstop: [{
			name: String,
			stats: String
		}],
		outfield: [{
			name: String,
			stats: String
		}]

	},
	credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
