import express from 'express';
var router = express.Router();
var controller = require('../controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Klubby')
});

router.post('/club', controller.googlePlaces.fetchClubsNearByGeoCode);

router.post('/event' , controller.event.getEventsByCity);

module.exports = router;
