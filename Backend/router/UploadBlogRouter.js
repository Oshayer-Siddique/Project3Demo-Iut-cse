const express = require('express')

const router = express.Router();

const{uploadBlog} = require('../controller/UploadBlogController');

router.post('/iut-cse/admin/uploadblog',uploadBlog);



module.exports = router;