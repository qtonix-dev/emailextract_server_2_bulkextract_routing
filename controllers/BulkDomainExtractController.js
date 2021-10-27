const response = require('express');

const paginate = require('mongoose-pagination');

const BulkDomainExtract = require('../models/BulkDomainExtract');
const BulkDomainExtractInfo = require('../models/BulkDomainExtractInfo');
const BulkDomainExtractEmails = require('../models/BulkDomainExtractEmails');
const BulkDomainExtractCountForShow = require('../models/BulkDomainExtractCountForShow');
const Package = require('../models/Package');
const User = require('../models/User');


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

  var userinfo= await User.findOne({_id:req.params.userid});
  var userpackageinfo= await Package.findOne({_id:userinfo.packageid});

  res.json({
    response:true,
    domainextractinfo,
    bulkdomainextract,
    bulkdomainextractemails,
    bulkdomainextractcount,
    userinfo,
    userpackageinfo
  })

}

module.exports={index,viewdetail};
