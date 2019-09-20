const favorite = {};
import db from "../database";

favorite.postFavorite = async (req, res) => {
    try {
        let { eventId, userId } = req.body;
        let resp = await new db.Favorite({
            eventId,
            userId
        }).save();
        res.json({
            event: resp
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

favorite.getFavoriteById = async (req, res) => {
    try {
        let { userId } = req.params;
        let resp = await db.Favorite.find({
            userId
        }).populate('eventId');
        res.json({
            event: resp
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

favorite.deleteFavoriteEntryByEventId = async (req, res) => {
    try {
        const { eventId } = req.params;
        const resp = await db.Favorite.remove({ _id: eventId });
        res.status(200).json({
            deleted: resp
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

export default favorite;