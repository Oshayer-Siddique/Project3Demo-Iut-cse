const express = require('express')

const router = express.Router();


const {addmember,search_member,getmember} = require('../controller/MemberController');

router.post('/iut-cse/admin/addmember',addmember);
router.post('/iut-cse/searchmember',search_member);
router.get('/iut-cse/getmember',getmember);



module.exports = router;