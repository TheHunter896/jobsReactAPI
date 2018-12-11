const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Job = new Schema({
  title: String,
  duration: String,
  description: String,
  payment: Number,
  requirements: Array,
  host: [{type: Schema.ObjectId, ref:"User"}]
})

var job = mongoose.model("job", Job)

module.exports = job