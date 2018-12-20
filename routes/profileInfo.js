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
					console.log('DIDNT FIND ANYTHING FEGGOT');
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

<<<<<<< HEAD
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
=======
	console.log(userDataArray);

	console.log(userData);

	User.findOneAndUpdate({ _id: req.signedCookies.userID }, { userDataArray })
		.then((result) => {
			res.send(200);
		})
		.catch((err) => console.log(err));
>>>>>>> 01ef7a345c8e1bfe3769b1debc2e92758ec86bce
});

module.exports = router;
