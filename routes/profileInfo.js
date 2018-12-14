const express = require('express')
const router = express.Router()
const checkAuthenticate = require('../public/javascripts/authenticate.js')

var user = require('../models/User')


router.get('/', checkAuthenticate ,(req, res) => {
  console.log(req.body)
  user.findOne({"info.base.email": req.body})
  .then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch(err => console.log(err))
})

module.exports = router