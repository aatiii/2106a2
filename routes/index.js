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

/* POST register */
router.post('/register', function(req, res, next) {
  // use the Account model to create a new user with passport
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) { // failure
      console.log(err);
      res.redirect('error', { title: 'Create Account Error'});
    }
    res.redirect('/login'); // success
  });
});

module.exports = router;
