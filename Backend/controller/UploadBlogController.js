const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Blog = require("../models/blog");

const storage = multer.diskStorage({
  destination: "UPLOAD_FOLDER/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage }).single("image");








const uploadBlog = async(req,res) =>{
  await upload(req,res,(err) =>{
    if(err){
      res.send("File Upload Fail");
    }
    const {title,body,imageUrl} = req.body;
    
    const newBlog = new Blog({
      title,
      body,
      imageUrl,
      
    });
    
    newBlog.save();
    //res.send(newBlog);
    console.log(imageUrl);
    res.send("Successfull")
    //console.log(imageUrl);

  })

}



async function getblogs(req, res) {
  try {
    const blogs = await Blog.find({}, "title body imageUrl uploadTime");
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
      
      );

      const matchingblogsnames = matchingblogs.map(blogs => blogs);
      res.json(matchingblogsnames);



    
  } catch (err) {
    res.status(500).send("An error happend blog search");

  }
}


async function deleteblog(req,res){

    const {title} = req.body;
    try{
        const deleteblog = await Blog.findOneAndDelete({title});
        if(!deleteblog){
            res.send("Blog not found");
        }
        res.send("Deleted");

    }
    catch(err){
        res.send("error");

    }


}



module.exports = {
  uploadBlog,
  getblogs,
  search_blog,
  deleteblog,

};
