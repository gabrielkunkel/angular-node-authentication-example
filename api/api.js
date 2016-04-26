/**
 * Created by gabrielkunkel on 4/23/16 in JavaScript.
 */

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var User = require('./models/User.js');
var jwt = require('jwt-simple');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
  done(null, user.id);

});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

var strategy = new LocalStrategy({
  usernameField: 'email'
}, function (email, password, done) {

  var searchUser = {
    email: email
  };

  User.findOne(searchUser, function (err, user) {
    if (err) return done(err);

    if (!user) return done(null, false, {
      message: 'Wrong email/password'
    });

    user.comparePasswords(password, function (err, isMatch) {
      if (err) return done(err);

      if (!isMatch) return done(null, false, {
        message: 'Wrong email/password'
      });

      return done(null, user);

    });

  })

}); // end of new LocalStrategy

passport.use(strategy);

app.post('/register', function (req, res) {

  var user = req.body;

  var newUser = new User({
    email: user.email,
    password: user.password
  });

  newUser.save(function (err) {
    createSendToken(newUser, res);
  });

}); // end of register


app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    if(err) next(err);

    req.login(user, function (err) {
      if(err) next(err);

      createSendToken(user, res);
    })

  })(req, res, next);
}); // end of login app.post


function createSendToken(user, res) {

  var payload = {
    // iss: req.hostname,
    sub: user.id
  };

  var token = jwt.encode(payload, "forbidden");

    res.status(200).send({
      user: user.toJSON(),
      token: token
    });

}


var loveConnections = [
  'Melanie',
  'Bender',
  'Tiffany',
  'Cupcake',
  'Cythnia',
  'Kelly',
  'Jessica'
];

app.get('/connections', function (req, res) {
  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, "forbidden");

  if (!payload.sub) {
    res.status(401).send({
      message: 'Authentication failed.'
    });
  }

  if (!req.headers.authorization) {
    return res.status(401).send({
      message: 'You are not authorized.'
    });
  }

  res.json(loveConnections);
}); // end of app.get

mongoose.connect('mongodb://localhost/angjwt');

var server = app.listen(3000, function () {
  console.log('api listening on ', server.address().port);
});
