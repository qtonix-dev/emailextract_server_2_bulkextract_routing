const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulkDomainExtractInfoSchema = new Schema({
  listname:{
    type:String
  },
  uuid:{
    type:String
  },
  userid:{
    type:String
  },
  username:{
    type:String
  },
  useremail:{
    type:String
  },
  totaldomains:{
    type:Number
  },
  totaldomainames:{
    type:Object
  }
},{timestamps:true})

const BulkDomainExtractInfo = mongoose.model('BulkDomainExtractInfo',BulkDomainExtractInfoSchema);
module.exports=BulkDomainExtractInfo;
