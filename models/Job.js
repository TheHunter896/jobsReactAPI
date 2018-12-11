const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var JobSchema = new Schema({
	title: String,
	duration: String,
	location: String,
	salary: String,
	description: String,
	requirements: Array,
	host: { type: Schema.ObjectId, ref: 'User' }
});

var Job = mongoose.model('Job', JobSchema);

module.exports = Job;
