const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const Member = require("../models/member");

async function addmember(req,res,next){
    const {name,post,contact} = req.body;

    const newMember = new Member({
        name,
        post,
        contact,
    })

    await newMember.save();
    res.send("MEMBER added");


}

module.exports = {
    addmember,
}

