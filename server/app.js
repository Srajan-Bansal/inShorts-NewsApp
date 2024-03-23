const express = require('express');
const route = require('./routes/route');;
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
	console.log('node dev');
}
app.use(cors());

// Routes
app.use('/', route);

module.exports = app;