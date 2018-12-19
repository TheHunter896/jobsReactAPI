const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.clearCookie('userID', { signed: false });
	res.clearCookie('loggedIn', { signed: false });
	res.send(200);
});

module.exports = router;
