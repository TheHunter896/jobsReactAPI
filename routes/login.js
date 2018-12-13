const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const cookie = require('cookie-parser')
const passport = require('passport')

var user = require('../models/User')

//var LocalStrategy = require('passport-local').strategy
//
////Passport strategy
//passport.use(new LocalStrategy(
//  function(username, password, done) {
//    user.findOne({ email: username }, function (err, user) {
//      if (err) { return done(err); }
//      if (!user) { return done(null, false); }
//      if (!user.verifyPassword(password)) { return done(null, false); }
//      return done(null, user);
//    });
//  }
//));


router.post('/', (req, res) => {
  var userData = {
    username: req.body.username,
    password: req.body.password
  }

  debugger
  user.findOne({"info.base.email": userData.username})
  .then((result) => {
 
    bcrypt.compare(userData.password, result.info.base.password, (err, passwordCorrect) => {
      debugger
      if(err) console.log(err)
      if(passwordCorrect){
        res.cookie('Logged In', true)
        res.cookie('userID', result._id)
        res.send(200)
      }
      else{
        res.send(201)
      }
    })
  })
  .catch((err) => console.log(err))

})

module.exports = router
