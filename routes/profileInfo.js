const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

router.get('/', checkAuthenticate, (req, res) => {
  debugger
	if (req.query.isOf == true || req.query.isOffer == 'true') {
		User.findOne({ _id: req.signedCookies.userID }, {"info.base.password": 0})
			.then((result) => {
        debugger
        console.log(result)
				res.send(result);
				res.sendStatus(200);
			})
			.catch((err) => console.log(err));
	} else {
		User.findOne({ _id: req.signedCookies.userID }, {"info.base.password": 0})
			.then((result) => {
        debugger
				if (result == null) {
          debugger
          console.log("DIDNT FIND ANYTHING FEGGOT")
					res.send(201);
				} else {
          debugger
          res.send(result)
				}
			})
			.catch((err) => console.log(err));
	}
});

router.post('/', checkAuthenticate ,(req, res) => {
  debugger

	var userData = {
		info: {}
	}

	userData[info] = req.body.data
	
	User.update({id: req.signedCookies.userID}, {userData})
	.then(() => {
		debugger
		res.send(200)
	})
	.catch(err => console.log(err))
});

module.exports = router;