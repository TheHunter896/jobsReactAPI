var User = require('../models/User.js');

function checkAuthentication(req, res, next) {
	if (req.signedCookies.loggedIn) {
		User.findOne({ _id: req.signedCookies.userID }).then((result) => {
			if (result == null) {
				res.send(201).end();
			} else {
				next();
			}
		});
	} else {
		res.status(201).end();
	}
}

module.exports = checkAuthentication;
