const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	// use primary key (id) because oauth might not be Google+ 
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
	User.findOne({ googleID: profile.id  }).then((existingUser) => {
		if(!existingUser){
			new User({googleID: profile.id}).save().then(user => done(null, user));
		} else {
			done(null, existingUser);
		}
	});
    }
  )
);
