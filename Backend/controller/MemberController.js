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



async function search_member(req,res){
    try{
        const{name} = req.body;
        const matchingmember = await Member.find(
        {
            name: {$regex: name, $options: "i"},
            
            
        },"name post contact");

        const matchingmembernames = matchingmember.map(members => members);
        res.json(matchingmembernames);

    }
    catch(err){
        res.status(500).send("An error happend in member search");
    }
}

module.exports = {
    addmember,
    search_member,
}

