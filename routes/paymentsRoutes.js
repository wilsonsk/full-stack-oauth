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
		req.user.credits += 1;
		const user = await req.user.save();
		res.send(user);
		console.log(chargeObj);
	});
};
