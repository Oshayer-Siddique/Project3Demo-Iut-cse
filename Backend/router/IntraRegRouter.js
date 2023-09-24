const express = require('express')

const router = express.Router();

const{IntraReg,getIntraReg} = require('../controller/IntraRegController');

router.post('/iut-cse/intrareg',IntraReg);
router.get('/iut-cse/getintrareg',getIntraReg);


module.exports = router;


