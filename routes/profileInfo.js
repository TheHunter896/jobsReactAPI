const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

router.get('/', checkAuthenticate, (req, res) => {
	if (req.query.isOf == true || req.query.isOffer == 'true') {
		User.findOne({ _id: req.signedCookies.userID }, { 'info.base.password': 0 })
			.then((result) => {
				console.log(result);
				res.send(result);
				res.sendStatus(200);
			})
			.catch((err) => console.log(err));
	} else {
		User.findOne({ _id: req.signedCookies.userID }, { 'info.base.password': 0 })
			.then((result) => {
				if (result == null) {
					console.log('DIDNT FIND ANYTHING FEGGOT');
					res.send(201);
				} else {
					res.send(result);
				}
			})
			.catch((err) => console.log(err));
	}
});

router.post('/', checkAuthenticate, (req, res) => {
	var userData = {
		info: {}
	};

	userData[info] = req.body.data;

	User.update({ id: req.signedCookies.userID }, { userData })
		.then(() => {
			res.send(200);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
