import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        "id": {
            "type": "String"
        },
        "username": {
            "type": "String"
        },
        "profile_picture": {
            "type": "String"
        },
        "full_name": {
            "type": "String"
        },
        "bio": {
            "type": "String"
        },
        "website": {
            "type": "String"
        },
        "is_business": {
            "type": "Boolean"
        }
    }
);

export default mongoose.model('User', userSchema);
