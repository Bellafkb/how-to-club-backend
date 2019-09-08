import Comment from "../database/Comment";
const comment = {}

comment.postComment = async (req, res) => {
    try {
        const reqComment = req.body;
        let response = await Comment({
            text: reqComment.text,
            _userId: reqComment.userId,
            _eventId: reqComment.eventId
        }).save();
        res.json({ response })
    } catch (error) {
        res.json({ error })
    }
}

comment.getCommentByEventId = async (req, res) => {
    try {
        const comments = await Comment.find({ _eventId: req.params.eventId })
        res.status(200).json({
            comments
        })
    } catch (error) {
        console.log(error)
        res.status(500)
            .json({ error })
    }
}

export default comment;