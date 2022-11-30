import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: Number,
    replies: Number,
    retuits: Number,
    liked: Boolean,
    disliked: Boolean,
    username: String,
    handle: String,
    time: String,
    image: String
}, {collection: 'tuits'});

export default schema;