const express = require('express')

const router = express.Router();


const {addmember} = require('../controller/MemberController');

router.post('/iut-cse/admin/addmember',addmember);



module.exports = router;