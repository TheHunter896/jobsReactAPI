const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  req.clearCookie('userID')
  req.clearCookie('loggedIn')
  res.send(200)
})

module.exports = router