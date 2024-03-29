var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginIn = require('./routes/loginIn');
var home = require('./routes/home');
var sheng = require('./routes/sheng');
var gouhun = require('./routes/gouhun');
var mingbi = require('./routes/mingbi');
var rizhi = require('./routes/rizhi');
var goss = require('./routes/goss');
var rygl = require('./routes/rygl');
var mins = require('./routes/mins');
var seng = require('./routes/seng');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 中间件
app.use((req, res, next) => {
  var type = true;
  if (JSON.stringify(req.body) == "{}") {
      var json = req.query;
  } else {
      var json = req.body; 
  }
  for (i in json) {
      if (json[i] == '') { type = false; }
  }
  if (type) { 
    req.data = json; 
      next();
  } else {
      res.send({ ok: 2, data: '' });
  }
});


app.use('/', indexRouter);
app.use('/loginIn', loginIn);
app.use('/home', home);
app.use('/sheng', sheng);
app.use('/gouhun', gouhun);
app.use('/mingbi', mingbi);
app.use('/rizhi', rizhi);
app.use('/goss', goss);
app.use('/rygl', rygl);
app.use('/mins', mins);
app.use('/seng', seng);
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

module.exports = app;
