const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const _callbackURL = 'http://ec2-52-89-243-4.us-west-2.compute.amazonaws.com:8080/auth/google/callback';

passport.use(
        new GoogleStrategy({
                clientID: keys.googleClientID,
                clientSecret: keys.googleClientSecret,
                callbackURL: _callbackURL
        },
        (accessToken, refreshToken, profile, done) => {
                console.log(accessToken);
        })
);


