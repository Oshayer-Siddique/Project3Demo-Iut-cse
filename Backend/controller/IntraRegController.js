const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const COMPE1 = require("../models/intraCompe");


async function IntraReg(req,res,next){
    const{title,link} = req.body;
    try{


        const newCOMPE1 = new COMPE1({
            title,
            link,
        })

        await newCOMPE1.save();
        res.send("FORM UPLOADED");

    }
    catch(err){
        res.send(err);

    }
};



async function getIntraReg(req,res){
    try{
        const compe1 = await COMPE1.find({},"title link");
        res.json(compe1);


    }
    catch(err){
        res.status(500).json({ message: "Error in getting Intra Compe" });
    }
}



module.exports = {
    IntraReg,
    getIntraReg,
}

