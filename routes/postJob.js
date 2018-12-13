//Requires
const express = require('express');
const router = express.Router();

//Load Models
var Job = require('../models/Job');
var user = require('../models/User');

router.get('/', (req, res) => {
	Job.find({}, function(err, jobPost) {
		console.log(jobPost);
	});
});

//create job post

router.post('/', (req, res) => {
	const { title, duration, requirements, location, salary, description } = req.body;
	let userID = req.cookies.userID;
	// console.log(title, duration, requirements, location, description);
	Job.create({
		info: {
			title: title,
			duration: duration,
			requirements: requirements,
			salary: salary,
			description: description,
		},
		location: {
			country: "",
			city: "",
			adress: "",
			postcode: "",
		},
		jobs: {
			applied: [],
			saved: [],
			jobsPosted: [],
		},
		host: userID,
		
	}).then((result) => {
		user
			.findOneAndUpdate(
				{ _id: userID },
				{
					$push: { jobsPosted: result._id }
				}
			)
			.then((userResult) => {
				console.log(userResult);
				res.status(2001).send({ OK: 'submitted' });
			})
			.catch((error) => {
				res.status(418).send({ error: 'You should drink more coffee' });
			});
	});
});

module.exports = router;
