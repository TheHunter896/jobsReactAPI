const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

var user = require('../models/User')

router.post('/', (req, res) => {
  var userData = {
    username: req.body.username,
    password: req.body.password
  }

  user.findOne({email: username})
  .then((result) => {
    bcrypt.compare(userData.password, result.password, (err, res) => {
      if(res){
        res.cookie('Logged In', 'True', {signed: true})
        res.cookie('userID', result._id)
        res.sendStatus(200)
      }
      else{
        res.sendStatus(400)
      }
    })
  })
  .catch((err) => console.log(err))

})