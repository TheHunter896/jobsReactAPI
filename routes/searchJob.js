const express = require('express');
const router = express.Router();

//Load Models
var Job = require('../models/Job');

//create job post
router.get('/', (req, res) => {
	const { title, duration, requirements, location, salary, description } = req.body;
	console.log(title, duration, requirements, location, description);
	Job.create({
		title: title,
		duration: duration,
		requirements: requirements,
		location: location,
		salary: salary,
		description: description
	})
		.then((result) => {
			// user.findOneAndUpdate({_id: userId}, {$push: {passengers : userId}, $inc: {occupied_seats: seatOccupation}}, (err, updatedTrip) => {
			// 	res.render('postedTripFile', {searchTrip: true, currentUser: true});
			// })

			res.status(201).send({ message: 'This is a message to the REACT app;' });
		})
		.catch((error) => {
			res.status(418).send({ error: 'You should drink more coffee' });
		});
});

module.exports = router;
