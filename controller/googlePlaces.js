import config from '../config';
import GooglePlaces from 'node-googleplaces';
import db from '../database';
import Location from "../datatypes";

const googlePlaces = {}
const places = new GooglePlaces(config.GOOGLE_PLACES_API_KEY);

googlePlaces.fetchClubsNearByGeoCode = async (req, res) => {
    db.location.find({ city: req.body.city })
        .then(async (locationsResp) => {
            if (locationsResp.length >= 1) {
                res.status(200).json({
                    clubs : locationsResp
                })
            } else {
                var locations;
                var city = req.body.city;
                delete req.body.city;
                places.nearbySearch(req.body).then(async ({ text }) => {
                    locations = await Promise.all(JSON.parse(text).results.map((location) => {
                        let newLocation = new Location(
                            location.geometry.location.lat,
                            location.geometry.location.lng,
                            location.name,
                            location.price_level,
                            location.rating,
                            location.user_ratings_total,
                            location.vicinity,
                            city);
                        new db.location(newLocation).save();
                        return newLocation;
                    }))
                    res.json({clubs : locations});
                })
                    .catch((err) => {
                        res.send(err)
                    })

            }
        }).catch((err) => {
            res.json(err)
        })
}

module.exports = googlePlaces;
