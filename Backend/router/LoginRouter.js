const express = require('express')

const router = express.Router();

const{login,profile,logout} = require('../controller/LoginController');
const CheckLogin = require('../middlewares/checklogin');




router.post("/iut-cse/admin/login",login);
router.get("/iut-cse/admin/profile/:username", profile);
router.delete("/iut-cse/admin/logout",logout)

module.exports = router;