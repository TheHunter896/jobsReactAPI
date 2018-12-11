const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema({
  name: String,
  surname: String, 
  email: String,
  phone: Number,
  password: String,
  extendedInfo: {
    description: String,
    birthday: String,
    location: String,
    locationStreet: String,
    PostCode: String,
  },
  jobsPosted: [{type: Schema.ObjectId, ref:"Job"}],
})

var user = mongoose.model("users", User)

module.exports = user