const mongoose = require('mongoose');
const Photo = mongoose.model('photos');

module.exports = app => {
	app.get('/api/photos', async (req, res) => {
		const photos = await Photo.find({});
		res.send(photos);
	});
	app.post('/api/photos/:photoURI', async (req, res) => {
		const photo = await new Photo({ uri: req.params.photoURI }).save();
		client.hmset(photo.id, ['uri', photo.uri]);
	});
};
