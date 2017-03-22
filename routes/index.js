var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Ads Home'
   });
});

/* GET register */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Please Register'
  });
});

/* GET login */
router.get('/login', function(req, res, next) {

  res.render('login', {
    title: 'Please Login'
  });
});



module.exports = router;
