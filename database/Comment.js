import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text: { type: String, required: false },
    createdAt: { type: Date, required: false, default: Date.now },
    _eventId: { type: String },
    _userId: { type: String, required: false },
});

export default mongoose.model('Comment', commentSchema);
