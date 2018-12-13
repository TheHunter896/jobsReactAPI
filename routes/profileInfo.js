const express = require('express')
const router = express.Router()

var user = require('user')

router.get('/', (req, res) => {
  if(req.cookies.loggedIn == true){
    user.findOne({"info.base.email": req.query.u})
  .then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch(err => console.log(err))
  }
  else{
    res.send(201)
  }
  
})