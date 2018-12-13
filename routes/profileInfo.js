const express = require('express')
const router = express.Router()

var user = require('user')

router.get('/', (req, res) => {
  user.findOne({_id: req.signedCookies.uID})
  .then((result) => {
    res.json(result)
  })
  .catch(err => console.log(err))
})