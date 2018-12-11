//Requires
const express = require('express')
const router = express.Router()

//Models
var user = require('../models/User')


router.post('/', (req, res) => {

  user.findOne({email: req.body.email})
  .then((result) => {
    if(result != undefined){
      user.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      })
      .then((result) => {
        console.log(result.name + "user was created succsessfully")
        
      })
    }
    else{
      res.status(418)
    }
  })
  .catch(err => console.log(err))

})

module.exports = router