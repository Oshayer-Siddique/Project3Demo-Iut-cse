const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Blog = require("../models/blog");
//const { search } = require("../router/IntraRegRouter");

async function uploadBlog(req, res, next) {
  const { title, body } = req.body;
  try {
    // let authorization = req.cookies[process.env.COOKIE_NAME];
    // const decoded = jwt.verify(authorization,process.env.secret_key);
    // const uploadername = decoded.username;

    //const uploader = uploadername;
    //res.send(uploadername);

    const newBlog = new Blog({
      title,
      body,
    });
    await newBlog.save();
    res.send("Data Saved");
    next();
  } catch (err) {
    res.send(err);
  }
}

async function getblogs(req, res) {
  try {
    const blogs = await Blog.find({}, "title body");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error in getting blog" });
  }
}

async function search_blog(req, res) {
  try {
    const { title } = req.body;
    const matchingblogs = await Blog.find(
      {
        title: { $regex: title, $options: "i" },
      },
      "title"
      );

      const matchingblogsnames = matchingblogs.map(blogs => blogs.title);
      res.json(matchingblogsnames);



    
  } catch (err) {
    res.status(500).send("An error happend blog search");

  }
}

module.exports = {
  uploadBlog,
  getblogs,
  search_blog,
};
