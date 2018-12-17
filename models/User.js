const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
	info: {
		base: {
			name: String,
			surname: String,
			email: String,
			phone: String,
			password: String
		},
		extendedInfo: {
			description: String,
			birthday: String,
			location: String,
			locationStreet: String,
			zipCode: String
		}
	},
	jobs: {
		applied: [ [ { type: Schema.ObjectId, ref: 'Job' } ] ],
		saved: [ [ { type: Schema.ObjectId, ref: 'Job' } ] ],
		postedJobs: [ { type: Schema.ObjectId, ref: 'Job' } ],
	}
});

var user = mongoose.model('users', User);

module.exports = user;
