const mongoose = require("mongoose");

const compe2Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    university:{
        type:String,
        required:true,

    },
    session:{
        type:Number,
        required:true,


    },
    email:{
        type:String,
        required:true,


    },
    teamname:{
        type:String,
        required:true,
        unique:true,

    },
    category:{
        type:String,
        required:String,

    },
    teamsize:{
        type:Number,
        required:true,

    }



});


const COMPE2 = mongoose.model("COMPE2",compe2Schema);


module.exports = COMPE2;