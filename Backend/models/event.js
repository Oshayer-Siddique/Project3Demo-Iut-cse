const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,



    },
    body:{
        type:String,
        required:true,
    },
    imageurl:{
        type: String,

    }
});

const Event = mongoose.model("Event",eventSchema);

module.exports = Event;