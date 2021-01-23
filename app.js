const express = require('express');
var cors = require('cors')
const logger = require('morgan');
const db = require('./db/db');

const indexRouter = require('./routes/index');
const requestRouter = require('./routes/request');
const donorRouter = require('./routes/donor');


const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/request', requestRouter);
app.use('/donor', donorRouter);


module.exports = app;
