const express = require('express');
const router = express.Router();



const BulkDomainExtractController = require('../controllers/BulkDomainExtractController');

router.get('/',BulkDomainExtractController.index);
router.get('/viewdetail/:uuid',BulkDomainExtractController.viewdetail);


module.exports=router;
