const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulkDomainExtractCountForShowSchema = new Schema({
  uuid:{
    type:String
  },
  userid:{
    type:String
  },
  domain:{
    type:String
  }
},{timestamps:true})

const BulkDomainExtractCountForShow = mongoose.model('BulkDomainExtractCountForShow',BulkDomainExtractCountForShowSchema);
module.exports=BulkDomainExtractCountForShow;
