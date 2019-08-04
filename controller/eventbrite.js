const eventbrite = require('eventbrite').default;
import config from '../config'
// Create configured Eventbrite SDK
const sdk = eventbrite({ token: config.EVENTBRITE_API_KEY });
const eventBrite = {}
import db from '../database'

eventBrite.myprofile = (req, res) => {
    sdk.request('/users/me')
    .then(content => {
        res.json({
            content
        })
    });
}

eventBrite.fetchEvents = (req, res) => {
    sdk.request(`/events/search?location.address=${req.body.city}&location.within=${req.body.radius}&categories=${req.body.category}`)
    .then(async content => {
        await Promise.all(content.events.map(event =>{
            new db.EventBrite(event).save();
        }))
        res.json({
            content
        })
    }).catch((err)=>{
        console.log(err)
        res.json(err)
    });
}
module.exports = eventBrite;