const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	if (req.session.passport.user.id != '') {
		res.send(200);
	} else {
		res.send(201);
	}
});

module.exports = router;
