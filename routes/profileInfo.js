const express = require('express');
const router = express.Router();
const checkAuthenticate = require('../public/javascripts/authenticate.js');

var User = require('../models/User');

router.get('/', (req, res) => {
	User.findOne({ 'info.base.email': 'dvdbros@hotmail.com' })
		.then((result) => {
			if (result == null) {
				res.send(201);
			} else {
				res.send(result);
				res.sendStatus(200);
			}
		})
		.catch((err) => console.log(err));
});

module.exports = router;
