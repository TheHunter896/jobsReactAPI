const express = require('express')
const router = express.Router()

var user = require('user')

router.get('/', (req, res) => {
  user.findOne({email: req.query.u}, {name, email, surname, phone, extendedInfo})
  .then((result) => {
    res.json(result)
  })
  .catch(err => console.log(err))
})