const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulkDomainExtractSchema = new Schema({
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
  domainname:{
    type:String
  },
  domainemails:{
    type:Object
  },
  isvaliddomain:{
    type:Boolean
  },
  isfoundemails:{
    type:Boolean
  },
  totalemails:{
    type:Number
  }
},{timestamps:true})

const BulkDomainExtract = mongoose.model('BulkDomainExtract',BulkDomainExtractSchema);
module.exports=BulkDomainExtract;
