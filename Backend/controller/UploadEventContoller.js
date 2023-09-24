const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const Event = require("../models/event");


async function uploadEvent(req,res,next){
    const {title,body} = req.body;

    try{
        const newEvent = new Event({
            title,
            body,

        });
        await newEvent.save();
        res.send("Event Uploaded");
        next();


    }
    catch(err){
        res.send(err);
    }


}


async function getEvents(req,res){
    try{
        const events = await Event.find({},"title body");
        res.json(events);
    }
    catch(err){
        res.status(500).json({ message: "Error in getting Events" });
    }
}


async  function deleteevent(req,res){
    const{title} = req.body;
    try{
        const deleteevent = await Event.findOneAndDelete({title});
        if(!deleteevent){
            res.send("Event not found");
        }
        res.send("Deleted Event");
    }
    catch(err){
        res.send("Errror occur in deleting Events");
    }
}


module.exports = {
    uploadEvent,
    getEvents,
    deleteevent,

};
