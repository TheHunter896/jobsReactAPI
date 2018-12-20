require('dotenv').config();
const local = require('./local');
var cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
var app = express();
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

// Middleware Setup
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('keyboard cat'));

app.use(
	cors({
		origin: `http://${local.ipAddress}:${local.portFront}`,
		credentials: true
	})
);

mongoose
	.connect(`mongodb://${local.ipAddress}/jobsAPI`, { useNewUrlParser: true })
	.then((x) => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const User = require('./models/User');

passport.use(
	new LocalStrategy(function(username, password, done) {
		User.findOne({ 'info.base.email': username }, function(err, user) {
			if (err) {
				return done(err);
			} else if (user === null) {
				return done(null, false);
			} else if (user != null) {
				bcrypt.compare(password, user.info.base.password, (err, res) => {
					if (err) {
						console.log(err);
						return done(null, false);
					} else if (res) {
						return done(null, user);
					} else {
						return done(null, false);
					}
				});
			} else {
				return done(null, false);
			}
		});
	})
);

passport.serializeUser(function(user, done) {
	done(null, { id: user.id, email: user.info.base.email });
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

//Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(
	expressSession({
		secret: 'thelifeissomagnificentandexsitenceispain',
		cookie: {
			secure: true,
			resave: true
		}
	})
);

// Express View engine setup
app.use(
	require('node-sass-middleware')({
		src: path.join(__dirname, 'public'),
		dest: path.join(__dirname, 'public'),
		sourceMap: true
	})
);

//production part
if (local.environment == 'production') {
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/', function(req, res) {
		res.sendFile(path.join(_dirname, '/build', 'index.html'));
	});
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
const register = require('./routes/register.js');
const postJob = require('./routes/postJob.js');
const searchJob = require('./routes/searchJob.js');
const getJob = require('./routes/getJob.js');
const checkEmail = require('./routes/checkEmai.js');
const login = require('./routes/login');
const profileInfo = require('./routes/profileInfo.js');
const authentication = require('./routes/auth');
const saveJob = require('./routes/saveJob');
const logout = require('./routes/logOut.js');

//Routes
app.use('/', index);
app.use('/register', register);
app.use('/post-job', postJob);
app.use('/search-job', searchJob);
app.use('/get-job', getJob);
app.use('/checkEmail', checkEmail);
app.use('/login', login);
app.use('/profileInfo', profileInfo);
app.use('/auth', authentication);
app.use('/save-job', saveJob);
app.use('/logout', logout);
var os = require('os');
var ifaces = os.networkInterfaces();

// app.listen(5000, () => {
// 	console.log(`Listening `);
// });

module.exports = app;
