const express = require('express');
const router = express.Router();
const checkAuthenticate = require('../public/javascripts/authenticate.js');

var User = require('../models/User');

router.get('/', (req, res) => {
  debugger
  User.findOne({"info.base.email":"dvdbros@hotmail.com"})
  .then((result) => {
    debugger
    if(result == null){
      debugger
      res.send(201)
    }
    else{
      debugger
      res.send(result)
      res.sendStatus(200)
    }
  })
  .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  
  var userData = req.body.data
  // var userDataArray = []
  // for(const key in userData){
  //   var name = key
  //   userDataArray.push({name: userData[key]})
    
  // }
  console.log(userDataArray)
  
  console.log(userData)

  User.findOneAndUpdate({"info.base.email":"dvdbros@hotmail.com"}, {userDataArray}) 
  .then((result) => {
    res.json(result)
    res.send(200)
  })
  .catch(err => console.log(err))
})

module.exports = router

module.exports = router;
