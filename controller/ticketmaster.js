import config from '../config'
import axios from 'axios';
const ticketmaster = {};
//const rootURL = "https://app.ticketmaster.com/discovery/v2/"

ticketmaster.fetchEventsByLocation = (req, res) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${config.TICKETMASTER_KEY}`)
        .then( ({data}) => {
            res.send(data)

        }).catch( (error) => {
            res.json({
                error
            })
        })  
}

export default ticketmaster;