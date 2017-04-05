var express = require('express');
var router = express.Router();

// reference ads model
let Ads = require('../models/ads');

// auth
let passport = require('passport');

/* GET ads index page. */
router.get('/', function(req, res, next) {
  
  Ads.find(function(err, ads) {
      if (err) {
          console.log(err);
          res.end(err);
          return;
      }
      res.render('ads/index', { 
          ads: ads,
            title: 'Ads List',
            user: req.user
      });
  });    
});

// GET /ads/add - show the empty form
router.get('/add', function(req, res, next) {
   res.render('ads/add', {
      title: 'Post Ad',
       user: req.user
   });
});

// POST /ads/add
router.post('/add', function(req, res, next) {
    Ads.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
        
    },function(err) {
        if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      // no error so show updated ad list
      res.redirect('/ads');
    });
});    

// GET /ads/delete/_id
router.get('/delete/:_id', function(req, res, next) {
   // delete ads and redirect
   Ads.remove({ _id: req.params._id }, function(err) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.redirect('/ads');
   });
});

// GET /ads/_id 
router.get('/:_id', function(req, res, next) {
   // look up the selected ad
   Ads.findById(req.params._id, function(err, ads) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.render('ads/edit', {
         ads: ads,
         title: 'Edit Ad',
          user: req.user
      });
   });
});

// POST /ads/_id - save 
router.post('/:_id', function(req, res, next) {
   // create an filled ads object
   let ads = new Ads({
      _id: req.params._id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price
   });

   Ads.update({ _id: req.params._id }, ads, function(err) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.redirect('/ads');
   });
});


module.exports = router;
