// const express = require('express');
// const router = express.Router();
// // const checkAuthenticate = require('../public/javascripts/authenticate.js')

var User = require('../models/User')

// router.get('/', checkAuthenticate, (req, res) => {
// 	console.log(req.body);
// 	user
// 		.findOne({ 'info.base.email': req.body })
// 		.then((result) => {
// 			console.log(result);
// 			res.json(result);
// 		})
// 		.catch((err) => console.log(err));
// });

router.get('/', (req, res) => {
  debugger
  User.findOne({"info.base.email": 'dvdbros@hotmail.com'})
  .then((result) => {
    if(result == null){
      debugger
      res.send(201)
    }
    else{
      debugger
      res.send(result)
      res.sendStatus(200)
    }
  })
  .catch(err => console.log(err))
})

module.exports = router
