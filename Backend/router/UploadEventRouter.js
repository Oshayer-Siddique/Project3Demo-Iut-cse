const express = require('express')

const router = express.Router();

const{uploadEvent,getEvents,deleteevent} = require('../controller/UploadEventContoller');




router.post('/iut-cse/admin/uploadevent',uploadEvent);
router.get('/iut-cse/getevent',getEvents);
router.post('/iut-cse/admin/deleteevent',deleteevent);


module.exports = router;