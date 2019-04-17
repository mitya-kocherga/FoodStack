const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/FoodStackDB';
mongoose.connect(mongoDB, { useNewUrlParser: true }) //Set up default mongoose connection


const db = mongoose.connection;  //Get the default connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));//Bind connection to error event (to get notification of connection errors)

db.once('open', () => {
  console.log('DB is connected')
})

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);


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
