import express from 'express';
var router = express.Router();
var controller = require('../controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('How To Club')
});


router.post('/club', controller.googlePlaces.fetchClubsNearByGeoCode);

router.get('/event', controller.eventBrite.myprofile);

router.post('/event' , controller.eventBrite.fetchEvents)



module.exports = router;
