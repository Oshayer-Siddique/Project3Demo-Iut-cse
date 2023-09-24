const express = require('express')

const router = express.Router();

const{uploadBlog,getblogs,search_blog} = require('../controller/UploadBlogController');

router.post('/iut-cse/admin/uploadblog',uploadBlog);
router.get('/iut-cse/getblog',getblogs);
router.post('/iut-cse/searchblog',search_blog);



module.exports = router;