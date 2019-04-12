var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/orderss', function(req, res, next) {
  res.json([{userName: 'Васян про', choice: 'топовый хохлятский борщ со смэтанкою'}, {userName: 'DJ - igurda', choice: 'голубцы голубчики'}]);
});


module.exports = router;
