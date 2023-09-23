const mongoose = require("mongoose");

const compe1Schema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    link:{
        type: String,
        required:true,
    },
    free2:{
        type: String,

    }
})


const COMPE1 = mongoose.model("COMPE1",compe1Schema);

module.exports = COMPE1;