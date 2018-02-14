const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('../config/keys');
const User = mongoose.model('users');

module.exports = app => {
	app.post(
		'/api/addPlayer', async (req, res) => {
			const user = await User.findOne({ googleID: req.user.googleID });
			const position = req.body.playerPosition;
			user.team[position].push({ name: req.body.playerName });
			user.save();
 		}
	)
};
