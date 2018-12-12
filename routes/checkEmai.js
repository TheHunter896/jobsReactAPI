const express = require('express')
const router = express.Router()

var user = require('../models/User')

router.get('/', (req, res) => {
  res.sendStatus(200)
})


router.post('/', (req, res) => {
  console.log('reloooo')
  user.findOne({email: req.body.email})
  .then((result) => {
    if(result == null){
      res.send(200)
      console.log("Correct")
    }
    else{
      console.log("Even more correct")
      res.status(201)
    }
  })
})

module.exports = router;