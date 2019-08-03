const eventbrite = require('eventbrite').default;
import config from '../config'
// Create configured Eventbrite SDK
const sdk = eventbrite({ token: config.EVENTBRITE_API_KEY });
const eventBrite = {}

eventBrite.myprofile = (req, res) => {
    sdk.request('/users/me').then(content => {
        res.json({
            content
        })
    });
}

eventBrite.fetchEvents = (req, res) => {
    sdk.request('/users/mev3/events/search?location.address=berlin&location.within=2km&expand=venue&categories=103')
    .then(content => {
        res.json({
            content
        })
    });
}
module.exports = eventBrite;