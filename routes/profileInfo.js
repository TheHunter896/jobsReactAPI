const express = require('express');
const router = express.Router();
const checkAuthenticate = require('./authenticate.js');

var User = require('../models/User');

router.get('/', checkAuthenticate, (req, res) => {
	if (req.query.isOf == true || req.query.isOffer == 'true') {
		User.findOne({ _id: req.signedCookies.userID }, { 'info.base.password': 0 })
			.then((result) => {
				console.log(result);
				res.send(result);
				res.sendStatus(200);
			})
			.catch((err) => console.log(err));
	} else {
		User.findOne({ _id: req.signedCookies.userID }, { 'info.base.password': 0 })
			.then((result) => {
				if (result == null) {
					console.log('DIDNT FIND ANYTHING FEGGOT');
					res.send(201);
				} else {
					res.send(result);
				}
			})
			.catch((err) => console.log(err));
	}
});

<<<<<<< HEAD
router.post('/', checkAuthenticate ,(req, res) => {
  debugger

	var userData = {
		info: {}
	}

	var base = {}
	var extendedInfo = {} 
 

	for(let key in req.body.data){
		switch(key){
			case 'name':
				debugger 
				base[key] = req.body.data[key]
				debugger
				break;
			case 'surname':
				debugger 
				base[key] = req.body.data[key]
				debugger
				break;
			case 'phone':
				debugger 
				base[key] = req.body.data[key]
				debugger
				break;
			case 'email':
				debugger 
				base[key] = req.body.data[key]
				debugger
				break;
			case 'description':
				debugger 
				extendedInfo[key] = req.body.data[key]
				debugger
				break;
			case 'location':
				debugger 
				extendedInfo[key] = req.body.data[key]
				debugger
				break;
			case 'locationStreeet':
				debugger 
				extendedInfo[key] = req.body.data[key]
				debugger
				break;
			case 'zipCode':
				debugger 
				extendedInfo[key] = req.body.data[key]
				debugger
				break;
			case 'birthday':
				debugger 
				extendedInfo[key] = req.body.data[key]
				debugger
				break;
		}
	}

	userData.info = {base}
	userData.info = {extendedInfo}

	debugger

	User.findOneAndUpdate({id: req.signedCookies.userID}, {userData})
	.then((result) => {
		debugger
		console.log(result)
		res.send(200)
	})
	.catch(err => {console.log(err); res.status(403).end()})
=======
router.post('/', checkAuthenticate, (req, res) => {
	var userData = {
		info: {}
	};

	userData[info] = req.body.data;

	User.update({ id: req.signedCookies.userID }, { userData })
		.then(() => {
			res.send(200);
		})
		.catch((err) => console.log(err));
>>>>>>> c756b3ba1df6d12dab530deb14ca931927b96767
});

module.exports = router; 
