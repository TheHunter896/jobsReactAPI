const express = require('express');
const router = express.Router();

router.get('/json', (req, res) => {
	res.json({ message: 'message' });
});

module.exports = router;
