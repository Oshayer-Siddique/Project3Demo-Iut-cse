const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
var aboutdata;
async function postaboutpage(req,res,next){
    const {details} = req.body;
    aboutdata = details;
    res.send(aboutdata);
}

async function getaboutpage(req,res){
    res.send(aboutdata);
}




module.exports = {
    postaboutpage,
    getaboutpage,
}