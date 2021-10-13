const response = require('express');


const BulkDomainExtract = require('../models/BulkDomainExtract');
const BulkDomainExtractInfo = require('../models/BulkDomainExtractInfo');
const BulkDomainExtractEmails = require('../models/BulkDomainExtractEmails');
const BulkDomainExtractCountForShow = require('../models/BulkDomainExtractCount');

// INDEX
const index = (req,res) => {
  res.json({
    response:true
  })
}


// VIEW DETAILS
const viewdetail = async (req,res) => {
  var domainextractinfo = await BulkDomainExtractInfo.findOne({uuid:req.params.uuid});
  var bulkdomainextract = await BulkDomainExtract.find({uuid:req.params.uuid});
  var bulkdomainextractemails = await BulkDomainExtractEmails.find({uuid:req.params.uuid});
  var bulkdomainextractcount = await BulkDomainExtractCountForShow.find({uuid:req.params.uuid});

  res.json({
    response:true,
    domainextractinfo,
    bulkdomainextract,
    bulkdomainextractemails,
    bulkdomainextractcount
  })
}

module.exports={index,viewdetail};
