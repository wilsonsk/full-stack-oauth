require('./models/User');
require('./models/Survey');
require('./models/Photo');
require('./services/passport');
const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const socket = require('socket.io');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();
console.log(process.env.REDISTOGO_URL);
// Test Redis To Go (Heroku)
if (process.env.REDISTOGO_URL) {
	var rtg   = require("url").parse(process.env.REDISTOGO_URL);
	var redis = require("redis").createClient(rtg.port, rtg.hostname);
	
	redis.auth(rtg.auth.split(":")[1]);
} else {
    var redis = require("redis").createClient();
}
// End Test

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]	
	})
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/paymentsRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/photosRoutes')(app);
require('./routes/addPlayer')(app);

if(process.env.NODE_ENV === 'production') {
	// serve prod assets
	app.use(express.static('client/build'));
	// serve index.html
	const path = require('path');
	app.get('*', (req, res) => {
  		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  	});
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);
const io = socket.listen(server);

io.on('connection', (socket) => {
	console.log('user connected');

	socket.on('connected', (data) => {
		console.log(data);
	});

	socket.on('color change', (color) => {
		console.log(color);
		io.sockets.emit('gotIt');
	});

	socket.on('typing', () => {
		console.log('typing');
		socket.broadcast.emit('typing');
	});
});
