const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();




mongoose
  .connect("mongodb://127.0.0.1:27017/Project3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
//app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
dotenv.config();


// app.get('/',async(req,res)=>{
//     try{

//         res.send("Ok DATA");

//     }
//     catch{
//         res.json(500).send("Error");

//     }
// })

const RegisterRouter = require('./router/RegisterRouter');
const LoginRouter = require('./router/LoginRouter');
const UploadBlogRouter = require('./router/UploadBlogRouter');
const memberRouter = require("./router/memberRouter");
const AboutRouter = require('./router/AboutRouter');
const IntraRegRouter = require('./router/IntraRegRouter');
const InterRegRouter = require('./router/InterRegRouter');
const UploadEventRouter = require('./router/UploadEventRouter');



















//app.use('/',LandingRouter);
app.use('/',RegisterRouter);
app.use('/',LoginRouter);
app.use('/',UploadBlogRouter);
app.use('/',memberRouter);
app.use('/',AboutRouter);
app.use('/',IntraRegRouter);
app.use('/',InterRegRouter);
app.use('/',UploadEventRouter);






app.listen(process.env.port,()=> {
    console.log(`server listening on port ${process.env.port}`)
})