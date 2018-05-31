const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;

const users = require('../models').users;
const readings = require('../models').readings;

const GoogleCreds = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CB_URL
}

const TwitterCreds = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  userProfileURL: process.env.TWITTTER_USER_EMAIL,
  callbackURL: process.env.TWITTER_CALLBACK_URL
}

passport.use(new GoogleStrategy(GoogleCreds,
  (accessToken, refreshToken, profile, cb) => {
    const searchConditions = {
      $or: [
        { email: profile.emails[0].value},
        { google_id: profile.id.toString() }
      ]
    };

    const newUser = {
      email: profile.emails[0].value,
      google_id: profile.id.toString(),
      username: profile.displayName
    }

    users
      .findOrCreate({ where: searchConditions, defaults: newUser })
      .spread((user, created) => {
        readings.findAll({ where: { user_id: user.id } })
          .then(data => {
            logged = {user: user, readings: data}
            cb(null, logged)
          })
      })
  }))

passport.use(new TwitterStrategy(TwitterCreds,
  (token, tokenSecret, profile, done) => {
    const searchConditions = {
      $or: [
        { email: profile.emails[0].value },
        { twitter_id: profile.id.toString() }
      ]
    };

    const newUser = {
      email: profile.emails[0].value,
      twitter_id: profile.id.toString(),
      username: profile.displayName
    }

    users
      .findOrCreate({ where: searchConditions, defaults: newUser })
      .spread((user, created) => {
        readings.findAll({ where: { user_id: user.id } })
          .then(data => done(null, { user: user, readings: data }))
      })
  }));

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;