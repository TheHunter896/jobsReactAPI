const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
  var number = req.query.number
  var numberAux = parseInt(number)

  res.sendStatus(numberAux)
})

module.exports = router