const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

//save job post
router.post('/', checkAuthenticate, (req, res) => {
	let { jobId } = req.body;
	let userID = req.signedCookies.userID;
	let sessionID = req.session.userID;

	User.findOneAndUpdate(
		{ _id: userID },
		{
			$push: { 'jobs.saved': jobId }
		}
	)
		.then((userResult) => {
			res.status(200).send({ OK: 'submitted' });
		})
		.catch((error) => {
			res.status(418).send({ error: 'You should drink more coffee' });
		});
});

module.exports = router;
