import express from 'express';
var router = express.Router();
var controller = require('../controller')
var verifyToken = require('../controller/verifyToken')



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

router.get('/profile', verifyToken, (req, res, next) => {
  res.status(200).json({
    profile: req.accessToken,
  })
})

router.post('/favorite', verifyToken, controller.favorite.postFavorite);
router.get('/favorite/:userId', verifyToken, controller.favorite.getFavoriteById);

router.delete('/favorite/:eventId', verifyToken, controller.favorite.deleteFavoriteEntryByEventId);





module.exports = router;
