var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var homeRouter = require('./routes/home');
var methodOverride = require('method-override')


var hikersRouter = require('./routes/hikers');
const apiTrailRouter = require('./routes/trails');
const apiProfileRouter = require('./routes/profile')
const apiEditRouter = require('./routes/edit')
const checkAuth = require('./checkAuth');

var app = express();
//EJS engines
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(cookieParser());
app.use(
    session({
      secret: 'secret', // used to sign the cookie
      resave: false, // update session even w/ no changes
      saveUninitialized: true, // always create a session
      cookie: {
        secure: false, // true: only accept https req's
        maxAge: 2592000, // time in seconds
      }
    })
  );
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/hikers', checkAuth, hikersRouter);
app.use('/trails', apiTrailRouter)
app.use('/profile', checkAuth, apiProfileRouter)
app.use('/edit', checkAuth, apiEditRouter)



module.exports = app;
