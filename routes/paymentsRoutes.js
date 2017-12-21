const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
	app.post('/api/stripe', async (req, res) => {
		const chargeObj = await stripe.charges.create({
			amount: 100,
			currency: 'usd',
			description: '$1 for international exchange',
			source: req.body.id
		});		
		console.log(chargeObj);
	});
};
