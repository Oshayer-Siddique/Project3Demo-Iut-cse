const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,

    },
    uploadTime:{
        type: Date,
        default:Date.now,
    },

    uploader:{
        type: String,
    },
    imageUrl:{

        type:String,
    }



});

const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog;