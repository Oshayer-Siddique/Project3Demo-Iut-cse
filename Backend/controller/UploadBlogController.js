const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Blog = require("../models/blog");



async function uploadBlog(req,res,next){
    const {title,body} = req.body;
    try{

        let authorization = req.cookies[process.env.COOKIE_NAME];
        const decoded = jwt.verify(authorization,process.env.secret_key);
        const uploadername = decoded.username;

        const uploader = uploadername;
        //res.send(uploadername);

        const newBlog = new Blog({
            title,
            body,
            uploader,

        })
        await newBlog.save();
        res.send("Data Saved");






    }
    catch(err){

        res.send("ERROR HAENED");

    }

};



module.exports = {
    uploadBlog,
};