//Requires
const express = require('express')
const router = express.Router()

//Models
var user = require('../models/user')


router.post('/', (req, res) => {

  user.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  })
  .then((result) => {
    console.log(result.name + "user was created succsessfully")
    
  })
  .catch(err => console.log(err))

})