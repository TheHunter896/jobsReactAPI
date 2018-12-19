const express = require('express');
const router = express.Router();

//Load Models
var Job = require('../models/Job');

//search job post
router.post('/', (req, res) => {
	const { title, location } = req.body;
	let query = [];
	if (title) {
		query.push({ 'info.title': { $regex: title, $options: 'i' } });
	}

	if (location) {
		query.push({
			$or: [
				{
					'location.city': { $regex: location, $options: 'i' }
				},
				{
					'location.country': { $regex: location, $options: 'i' }
				}
			]
		});
	}

	Job.find(
		{
			$and: query
		},
		(err, jobs) => {
			res.send(jobs);
		}
	);
});

module.exports = router;
