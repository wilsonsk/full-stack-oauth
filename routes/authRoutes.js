const passport = require('passport');
const _callbackURL = 'http://ec2-52-89-243-4.us-west-2.compute.amazonaws.com:8080/auth/google/callback';

module.exports = server => {
	server.get('/auth/google', passport.authenticate('google', {    scope: ['profile', 'email']     }));
	server.get('auth/google/callback', passport.authenticate('google'));
};
