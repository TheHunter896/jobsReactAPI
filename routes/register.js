//Requires
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')


//Models
var user = require('../models/User')


router.post('/', (req, res) => {
  
  console.log(req.body)

  bcrypt.hash(req.body.password, 5)
  .then((hashedPassword) => {
    user.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    })
    .then((result) => {
      res.sendStatus(200)
    })
  })
  .catch(err => console.log(err))

})

module.exports = router