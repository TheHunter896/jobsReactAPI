const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema({
  name: String,
  surname: String, 
  email: String,
  phone: Number,
  password: String,
})

var user = mongoose.model("users", User)

module.exports = user