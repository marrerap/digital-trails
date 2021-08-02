var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var hikersRouter = require('./routes/hikers');
const apiTrailRouter = require('./routes/trails');
const hikersPageRouter = require('./routes/hikerpage');

var app = express();
//EJS engines
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/hikers', hikersRouter);
app.use('/trails', apiTrailRouter)
app.use('/hikerspage', hikersPageRouter)


module.exports = app;
