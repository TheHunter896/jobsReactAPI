var User = require('../models/User.js')

function checkAuthentication(req, res,next){
  debugger
  if(req.signedCookies.loggedIn){
    debugger
    User.findOne({_id: req.signedCookies.userID})
    .then((result) => {
      if(result == null){
        res.send(201).end()
      }
      else{
        res.send(200)
        next()
      }
    }) 
  }
  else{
    debugger
    res.status(201).end()
  }
}

module.exports = checkAuthentication