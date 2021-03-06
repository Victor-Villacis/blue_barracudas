var express = require('express');
var path = require('path');
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var session = require('express-session');

var PORT = process.env.PORT || 3000;

var db = require('./config/db.js');
var user = require('./model/users.js');

var index = require('./controller/index');
var api = require('./controller/api');
var authenticate = require('./controller/authenticate')(passport);
var search  = require('./controller/search');
var app = express();

//LOAD DIR
app.use(express.static(__dirname + "/public"));
// app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use(express.static(__dirname + "/public/partials"));
// app.use('/bower_components', express.static(__dirname + "/bower_components"));

//MIDDLEWARE
app.use(logger('dev'));
app.use(session({
  secret: 'Super secret'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

var initPassport = require('./config/passport-init');
initPassport(passport);

//ROUTES

app.use('/', index);
app.use('/api', api);
app.use('/auth', authenticate);
app.use('/search', search);

app.listen(PORT, function() {
  console.log("Application is listening on PORT:" + PORT);
});
