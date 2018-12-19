const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

router.get('/', checkAuthenticate, (req, res) => {
	if (req.query.isOf == true || req.query.isOffer == 'true') {
		User.findOne({ _id: req.signedCookies.userID }, { name, email, surname, phone })
			.then((result) => {
				res.send(result);
				res.sendStatus(200);
			})
			.catch((err) => console.log(err));
	} else {
		User.findOne({ _id: req.signedCookies.userID })
			.then((result) => {
				if (result == null) {
					console.log('DIDNT FIND ANYTHING FEGGOT');
					res.send(201);
				} else {
					console.log(result);
					res.send(result);
				}
			})
			.catch((err) => console.log(err));
	}
});

router.post('/', (req, res) => {
	var userData = req.body.data;

	console.log(userDataArray);

	console.log(userData);

	User.findOneAndUpdate({ _id: req.signedCookies.userID }, { userDataArray })
		.then((result) => {
			res.send(200);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
