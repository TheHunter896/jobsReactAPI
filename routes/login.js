const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');
const passport = require('passport');

var User = require('../models/User');

router.get('/', (req, res) => {
	if (req.signedCookies.loggedIn == true || req.signedCookies.loggedIn == 'true') {
		res.send(200);
	}
});

router.post('/', (req, res) => {
	User.findOne({ 'info.base.email': req.body.username }, function(err, user) {
		if (err) {
			res.send(err);
		} else if (user === null) {
			res.send(201);
		} else if (user != null) {
			bcrypt.compare(req.body.password, user.info.base.password, (err, value) => {
				if (err) {
					console.log(err);
					res.send(201);
				} else if (value) {
					res.cookie('loggedIn', true, { signed: true });
					res.cookie('userID', user._id, { signed: true });
					req.session.userID = user._id;

					res.send(200);
				} else {
					res.send(201);
				}
			});
		}
	});
});

module.exports = router;
