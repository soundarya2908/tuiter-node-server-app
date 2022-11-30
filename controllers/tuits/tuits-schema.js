import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    replies: Number,
    retuits: Number,
    liked: Boolean,
    username: String,
    handle: String,
    time: String,
    image: String
}, {collection: 'tuits'});

export default schema;