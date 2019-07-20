import config from '../config';
import GooglePlaces from 'node-googleplaces';
import db from '../database';


const googlePlaces = {}
const places = new GooglePlaces(config.GOOGLE_PLACES_API_KEY);

googlePlaces.fetchClubsNearByGeoCode = (req, res) => {
    var location = new db.location({name : "hello world"});
    location.save();
    places.nearbySearch(req.body).then((result) => {
        res.status(200).json({ data: result.body });
    });
}

module.exports = googlePlaces;