const express = require('express');
const morgan = require('morgan');
const app = express()

const tourRoute = require('./routes/tourRoute');
const userRoute = require('./routes/userRoute');

// Routes
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(`${__dirname}/public`));
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)

module.exports = app