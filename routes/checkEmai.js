const express = require('express');
const router = express.Router();

var user = require('../models/User');

router.post('/', (req, res) => {
	user.findOne({ 'info.base.email': req.body.data.email }).then((result) => {
		if (result == null) {
			res.send(200);
			console.log(result);
		} else {
			console.log(result);
			res.send(201);
		}
	});
});

module.exports = router;
