"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

var _passportInstagram = _interopRequireDefault(require("passport-instagram"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createError = require('http-errors');

var cors = require('cors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var app = express();
app.use(cors());
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

};

_mongoose["default"].connect("mongodb://".concat(_config["default"].MLAB_DB_USERNAME, ":").concat(_config["default"].MLAB_DB_PASSWORD, "@ds149947.mlab.com:49947/klubby"), {
  useNewUrlParser: true
}).then(function () {
  console.log('database connection was successful...');
})["catch"](function (err) {
  console.log({
    err: err
  });
}); // view engine setup


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(logger('dev')); //Bodyparser Middleware

app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/', indexRouter); // catch 404 and forward to error handler
//------------------auth-----------

app.use((0, _expressSession["default"])({
  secret: 'sytr456-65tyrd-12wrt',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());

_passport["default"].serializeUser(function (user, done) {
  done(null, user);
});

_passport["default"].deserializeUser(function (user, done) {
  done(null, user);
});

var InstagramStrategy = _passportInstagram["default"].Strategy;

_passport["default"].use(new InstagramStrategy({
  clientID: _config["default"].INSTAGRAM_CLIENT,
  clientSecret: _config["default"].INSTAGRAM_SECRET,
  callbackURL: "http://localhost:4000/auth"
}, function (accessToken, refreshToken, profile, done) {
  var user = {};
  user.name = profile.displayName;
  user.homePage = profile._json.data.website;
  user.image = profile._json.data.profile_picture;
  user.bio = profile._json.data.bio;
  user.media = "https://api.instagram.com/v1/users/".concat(profile.id, "/media/recent/?access_token=").concat(accessToken, "&count=8");
  user.fullname = profile._json.data.fullname;
  done(null, user);
}));

app.get('/auth/instagram', _passport["default"].authenticate('instagram'));
app.get('/auth', _passport["default"].authenticate('instagram', {
  successRedirect: '/users',
  failure: '/'
}));
app.get('/users', function (req, res) {
  res.status(200).json({
    'user': req.user
  });
});
app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
//# sourceMappingURL=app.js.map