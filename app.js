var createError = require('http-errors');
var cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const db = require('./database/User')

import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import store from 'store'

var indexRouter = require('./routes/index');


var app = express();
app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
import User from './database/User';

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
  callbackURL: "http://localhost:4000/auth"
}, async (accessToken, refreshToken, profile, done) => {
  let user = {};
  user.username = profile.username;
  user.website = profile._json.data.website;
  user.profile_picture = profile._json.data.profile_picture;
  user.bio = profile._json.data.bio;
  user.fullname = profile._json.data.fullname;
  user.id = profile.id
  let _profile = await User.find({ id: profile.id })
  if (_profile.length === 0) {
    profile = await new User(user).save();
    let jwtToken = jwt.sign({ profile }, '123');
    store.set('jwtToken', jwtToken)
    done(null, jwtToken)
  } else {
    profile = _profile[0]
    let jwtToken = jwt.sign({ profile }, '123');
    store.set('jwtToken', jwtToken)
    done(null, jwtToken)
  }
}))

app.get('/auth/instagram', passport.authenticate('instagram'))

app.get('/auth', passport.authenticate('instagram', { session: true }), (req, res) => {
  res.cookie('jwtToken', store.get('jwtToken'))
  res.redirect('http://localhost:3000')
})

app.get('/users', (req, res) => {
  res.status(200)
    .json({ user: req.user })
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
