const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

//save job post
router.post('/', checkAuthenticate, (req, res) => {
	let { jobId, userId } = req.body;
	User.findOneAndUpdate(
		{ _id: userId },
		{
			$push: { 'jobs.saved': jobId }
		}
	)
		.then((userResult) => {
			res.status(201).send({ OK: 'submitted' });
		})
		.catch((error) => {
			res.status(418).send({ error: 'You should drink more coffee' });
		});
});

module.exports = router;
