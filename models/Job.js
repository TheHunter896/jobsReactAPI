const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var JobSchema = new Schema({
	location: {
		country: String,
		city: String,
		adress: String,
		postcode: String
	},
	info: {
		title: String,
		duration: String,
		description: String,
		salary: String,
		startDate: Date
	},
	host: { type: Schema.ObjectId, ref: 'User' },
	postCreated: Date
});

var Job = mongoose.model('Job', JobSchema);

module.exports = Job;
