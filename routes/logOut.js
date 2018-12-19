const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.clearCookie('userID')
  res.clearCookie('loggedIn')
  res.send(200)
})

module.exports = router