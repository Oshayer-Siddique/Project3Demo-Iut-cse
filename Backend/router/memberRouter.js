const express = require('express')

const router = express.Router();


const {addmember,search_member} = require('../controller/MemberController');

router.post('/iut-cse/admin/addmember',addmember);
router.post('/iut-cse/searchmember',search_member);



module.exports = router;