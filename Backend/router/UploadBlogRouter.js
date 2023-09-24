const express = require('express')

const router = express.Router();

const{uploadBlog,getblogs,search_blog,deleteblog} = require('../controller/UploadBlogController');


router.post('/iut-cse/admin/uploadblog',uploadBlog);
router.get('/iut-cse/getblog',getblogs);
router.post('/iut-cse/searchblog',search_blog);
router.post('/iut-cse/admin/deleteblog',deleteblog);





module.exports = router;