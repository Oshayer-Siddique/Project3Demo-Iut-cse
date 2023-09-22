const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    post:{
        type:String,
        required:true,

    },
    contact:{
        type: String,
        
    },



});

const Member = mongoose.model("Member",memberSchema);
module.exports = Member;

