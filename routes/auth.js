const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  debugger
  if(req.session.passport.user.id != ""){
    debugger
    res.send(200)
  }
  else{
    debugger
    res.send(201)
  }
})

module.exports = router