const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const checkCredit = require('../middleware/checkCredit');

const Survey = mongoose.model('surveys');

module.exports = app => {
	app.post('/api/surveys', requireLogin, checkCredit, (req, res) => {
		const { title, subject, body, recipients } = req.body;
		
		// create survey
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => ({ email : email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});		

		// send email

		// save survey

	});
}
