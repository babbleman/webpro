var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session')
var MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var controller  = require('./controller/controller');
// var sqloptions  = require('./config/db');
// var sqlstore=   require('express-mysql-session');
// var sessionstore= new sqlstore(sqloptions);
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 01/04
// ルーター追加
// app.use(session({
//  secret: 'secret',
//  resave: false,
//  saveUninitialized: false,
//  store: sessionstore,
//  cookie:{
//  httpOnly: true,
//  secure: false,
//  maxage: 1000 * 60 * 30
//  }
// }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/regist',controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

module.exports = app;
