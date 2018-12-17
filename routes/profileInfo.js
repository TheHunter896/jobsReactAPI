const express = require('express');
const router = express.Router();
const checkAuthenticate = require('../public/javascripts/authenticate.js')

var User = require('../models/User')

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

module.exports = router

