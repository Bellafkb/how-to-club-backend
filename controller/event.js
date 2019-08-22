import { getEventBriteEventsByCity } from "../service";
import db from "../database";
const eventController = {};

eventController.getEventsByCity = async (req, res) => {
    try {
        let response = await db.Event.find({ city: req.body.city })
        if (response === undefined || response.length < 1) {
            let {events} = await getEventBriteEventsByCity(req.body.city, req.body.radius, req.body.category);
            response = events;
            await response.map((e) => {
                e.city = req.body.city;
                new db.Event(e).save();
            })
        }
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
};

export default eventController;