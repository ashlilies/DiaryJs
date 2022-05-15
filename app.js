const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require("connect-flash");
const session = require("express-session");
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");
require("dotenv").config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
const hbs = require("express-handlebars");
const helpers = require("./helpers/handlebars")
const Handlebars = require("handlebars");
const hbsHelpers = hbs.create({
    helpers: helpers,
    defaultLayout: "layout",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: ".hbs"
});
app.engine(".hbs", hbsHelpers.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Set up database
const DBConnection = require("./config/DBConnection")
// Connects to database
DBConnection.setupDb(process.env.DB_RESET == 1);

app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
