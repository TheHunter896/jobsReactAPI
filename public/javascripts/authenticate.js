var passport = require('passport')

function checkAuthentication(req, res,next){
  debugger
  if(req.isAuthenticated()){
    debugger
    next()
  }
  else{
    debugger
    res.status(403).end()
  }
}

module.exports = checkAuthentication