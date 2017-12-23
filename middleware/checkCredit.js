module.exports = (req, res) => {
	if(req.user.credits < 1) {
		return res.status(403).send({ error: 'You need at least 1 credit'});
	}

	next();
};
