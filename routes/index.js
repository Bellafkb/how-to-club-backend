var express = require('express');
var router = express.Router();
var controller = require('../controller/index.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('How To Club')
});

router.post('/club', controller.googlePlaces.fetchClubsNearByGeoCode);

module.exports = router;
