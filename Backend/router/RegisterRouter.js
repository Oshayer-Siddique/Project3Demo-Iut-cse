const express = require('express')

const router = express.Router();


const{register} = require('../controller/RegisterController')



router.post("/iut-cse/admin/register",register);


module.exports = router;