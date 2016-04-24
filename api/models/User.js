/**
 * Created by gabrielkunkel on 4/23/16 in JavaScript.
 */
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

UserSchema.methods.toJSON = function () {
  var user = this.toObject();
  delete user.password;
  console.log(user);
  return user;
};

UserSchema.pre("save", function (next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();

    })

  })

});

exports.model = mongoose.model("User", UserSchema);
