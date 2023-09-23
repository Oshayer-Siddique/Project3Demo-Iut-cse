const express = require('express')

const router = express.Router();

const{uploadBlog,getblogs} = require('../controller/UploadBlogController');

router.post('/iut-cse/admin/uploadblog',uploadBlog);
router.get('/iut-cse/getblog',getblogs);



module.exports = router;