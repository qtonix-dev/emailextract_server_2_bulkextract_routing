const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulkDomainExtractCountSchema = new Schema({
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

const BulkDomainExtractCount = mongoose.model('BulkDomainExtractCount',BulkDomainExtractCountSchema);
module.exports=BulkDomainExtractCount;
