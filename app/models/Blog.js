const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = Schema({
    title: String,
    sub_title: String,
    text: String,
    author_id: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
