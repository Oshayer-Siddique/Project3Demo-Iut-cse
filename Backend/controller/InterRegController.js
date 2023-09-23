const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const COMPE2 = require("../models/interCompe");


async function InterReg(req,res,next){
    const{
        name,
        university,
        session,
        email,
        teamname,
        category,
        teamsize

    } = req.body;


    const newCOMPE2 = new COMPE2({
        name,
        university,
        session,
        email,
        teamname,
        category,
        teamsize,

    })

    await newCOMPE2.save();
    res.send("REGISTRATION COMPETED");



};

module.exports = {
    InterReg,
}



