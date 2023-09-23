const express = require('express')

const router = express.Router();

const{InterReg} = require('../controller/InterRegController');


router.post('/iut-cse/interreg',InterReg);


module.exports = router;