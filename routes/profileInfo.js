const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

router.get('/', checkAuthenticate, (req, res) => {
  debugger
  if(req.query.isOf == true || req.query.isOffer == "true"){
    debugger
    User.findOne({_id: req.signedCookies.userID}, {name, email, surname, phone})
    .then((result) => {
      res.send(result)
      res.sendStatus(200)
    })
    .catch((err) => console.log(err))
  }
  else{
    User.findOne({_id: req.signedCookies.userID})
    .then((result) => {
      debugger
      if(result == null){
        debugger
        res.send(201)
      }
      else{
        debugger
        res.send(result).status(200)
        
      }
    })
    .catch(err => console.log(err))
  }
  
})

router.post('/', (req, res) => {
  
  var userData = req.body.data
  
  console.log(userDataArray)
  
  console.log(userData)

  User.findOneAndUpdate({_id: req.signedCookies.userID}, {userDataArray}) 
  .then((result) => {
    res.json(result)
    res.send(200)
  })
  .catch(err => console.log(err))
})

module.exports = router

module.exports = router;
