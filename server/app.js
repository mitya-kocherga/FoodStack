const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const menusRouter = require('./routes/menus');
const bodyParser = require('body-parser');
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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/orders', ordersRouter);
app.use('/users', usersRouter);
app.use('/menus', menusRouter);

app.use(function(req, res, next) { next(createError(404)); });
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;
