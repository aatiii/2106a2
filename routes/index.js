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

/* POST login */
router.post('/login', passport.authenticate('local', {
  successRedirect: '/ads',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login'
}));

/* GET logout */
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});


/* GET /google - show google login prompt */
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

/* GET /google/callback  */
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login',
    scope: 'email' 
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/ads');
  });

module.exports = router;
