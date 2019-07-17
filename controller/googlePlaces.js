const config = require('../config')
const googlePlaces = {}

const GooglePlaces = require('node-googleplaces');
const places = new GooglePlaces(config.GOOGLE_PLACES_API_KEY);

googlePlaces.fetchClubsNearByGeoCode = (req, res) => {
    places.nearbySearch(req.body).then((result) => {
        res.status(200).json({ data: result.body });
    });
}

module.exports = googlePlaces;