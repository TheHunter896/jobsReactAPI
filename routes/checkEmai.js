const express = require('express')
const router = express.Router()


var user = require('../models/User')

router.post('/', (req, res) => {
  debugger
  user.findOne({_id: req.signedCookies.userID})
  .then((result) => {
    if(result == null){ 
      res.send(200)
      console.log("Correct")
    }
    else{
      console.log("Even more correct")
      res.send(201)
    }
  })
})

module.exports = router;