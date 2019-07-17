var express = require('express');
var router = express.Router();
var controller = require('../controller/index.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello Heroku')
});

router.post('/club', controller.googlePlaces.fetchClubsNearByGeoCode);

module.exports = router;
