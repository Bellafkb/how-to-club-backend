import express from 'express';
var router = express.Router();
var controller = require('../controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Klubby')
});

router.post('/club', controller.googlePlaces.fetchClubsNearByGeoCode);

router.post('/event', controller.event.getEventsByCity);

router.get('/event/:id', controller.event.getEventByID);

router.post('/comment', controller.comment.postComment)

router.get('/comment/:eventId', controller.comment.getCommentByEventId)

router.post('/signup', controller.authentication.signup)

module.exports = router;
