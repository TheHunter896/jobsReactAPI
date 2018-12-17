const express = require('express');
const router = express.Router();

//Load Models
var Job = require('../models/Job');

//search job post
router.get('/:jobId', (req, res) => {
	Job.findOne({ _id: req.params.jobId }, (err, data) => {
		res.send(data);
	});
});

module.exports = router;
