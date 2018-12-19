//Requires
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');

//Models
var user = require('../models/User');

router.post('/', (req, res) => {
	user
		.findOne({ 'info.base.email': req.body.email })
		.then((result) => {
			if (result == null) {
				bcrypt
					.hash(req.body.thedata.password, 5, (err, hashedPassword) => {
						if (err) console.log(err);
						else {
							user
								.create({
									info: {
										base: {
											name: req.body.thedata.name,
											surname: req.body.thedata.surname,
											email: req.body.thedata.email,
											phone: req.body.thedata.phone,
											password: hashedPassword
										},
										extendedInfo: {
											description: '',
											birthday: '',
											location: '',
											locationStreet: '',
											zipCode: ''
										}
									},
									jobs: {
										applied: [],
										saved: []
									}
								})
								.then((result) => {
									res.cookie('loggedIn', true, {signed: true});
									res.cookie('userID', result._id, {signed: true});
									res.sendStatus(200);
								});
						}
					})
					.catch((err) => console.log(err));
			} else {
				res.sendStatus(201);
			}
		})
		.catch((err) => console.log(err));
});

module.exports = router;
