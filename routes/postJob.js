//Requires
const express = require('express');
const router = express.Router();

//Load Models
var Job = require('../models/Job');
var user = require('../models/User');

router.get('/', (req, res) => {
	Job.find({}, function(err, jobPost) {
		console.log(jobPost);
		return req.render('Henk');
	});
});

//create job post

router.post('/', (req, res) => {
	const {
		title,
		startDate,
		duration,
		address,
		postCode,
		city,
		country,
		salary,
		requirements,
		description
	} = req.body;
	let userID = req.cookies.userID;
	Job.create({
		info: {
			title: title,
			startDate: startDate,
			duration: duration,
			requirements: requirements,
			salary: salary,
			description: description
		},
		location: {
			adress: address,
			postcode: postCode,
			city: city,
			country: country
		},
		jobs: {
			applied: [],
			saved: [],
			jobsPosted: []
		},
		host: userID,
		postCreated: new Date()
	}).then((result) => {
		user
			.findOneAndUpdate(
				{ _id: userID },
				{
					$push: { 'jobs.jobsPosted': result._id }
				}
			)
			.then((userResult) => {
				console.log(userResult);
				res.status(201).send({ OK: 'submitted' });
			})
			.catch((error) => {
				res.status(418).send({ error: 'You should drink more coffee' });
			});
	});
});

module.exports = router;
