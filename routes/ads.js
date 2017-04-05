var express = require('express');
var router = express.Router();

// reference ads model
let Ads = require('../models/ads');

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


module.exports = router;
