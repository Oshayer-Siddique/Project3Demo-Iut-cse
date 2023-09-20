const express = require('express')

const router = express.Router();

const{uploadBlog} = require('../controller/UploadBlogController');

router.post('/uploadblog');



module.exports = router;