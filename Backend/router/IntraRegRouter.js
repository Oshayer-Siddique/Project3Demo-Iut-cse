const express = require('express')

const router = express.Router();

const{IntraReg} = require('../controller/IntraRegController');

router.post('/iut-cse/intrareg',IntraReg);


module.exports = router;


