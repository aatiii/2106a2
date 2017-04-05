var express = require('express');
var router = express.Router();
let passport = require('passport');
let Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Ads Home',
    user: req.user
   });
});

/* GET register */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Register',
    user: req.user
});
});

/* GET login */
router.get('/login', function(req, res, next) {

  res.render('login', {
    title: 'Login',
    user: req.user

  });
});



module.exports = router;
