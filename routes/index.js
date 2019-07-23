import express from 'express';
var router = express.Router();
var controller = require('../controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('How To Club')
});

console.log(controller.googlePlaces.fetchClubsNearByGeoCode)

router.post('/club', controller.googlePlaces.fetchClubsNearByGeoCode);

module.exports = router;
