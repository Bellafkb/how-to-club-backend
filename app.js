var createError = require('http-errors');
var cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')    

import mongoose from 'mongoose'

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
app.use(cors())

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

mongoose.connect(`mongodb://${config.MLAB_DB_USERNAME}:${config.MLAB_DB_PASSWORD}@ds149947.mlab.com:49947/klubby`,
  { useNewUrlParser: true })
  .then(() => {
    console.log('database connection was successful...')
  })
  .catch((err) => {
    console.log({ err })
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json())

app.use(logger('dev'));
//Bodyparser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler



//------------------auth-----------
import config from './config'
import session from 'express-session';
import passport from 'passport';
import Instagram from 'passport-instagram';

app.use(session({
  secret: 'sytr456-65tyrd-12wrt',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

const InstagramStrategy = Instagram.Strategy;
passport.use(new InstagramStrategy({
  clientID: config.INSTAGRAM_CLIENT,
  clientSecret: config.INSTAGRAM_SECRET,
  callbackURL: "https://peaceful-ocean-93955.herokuapp.com/auth"
}, (accessToken, refreshToken, profile, done) => {
  let user = {};
  user.name = profile.displayName;
  user.homePage = profile._json.data.website;
  user.image = profile._json.data.profile_picture;
  user.bio = profile._json.data.bio;
  user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=8`
  user.fullname = profile._json.data.fullname;
  done(null, user)
}))

app.get('/auth/instagram', passport.authenticate('instagram'))

app.get('/auth', passport.authenticate('instagram', {
  successRedirect: '/users',
  failure: '/'
}))

app.get('/users', (req, res) => {
  res.status(200)
    .json({ 'user': req.user })
})


app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
