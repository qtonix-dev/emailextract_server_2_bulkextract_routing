const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  name:{
    type:String
  },
  type:{
    type:String
  },
  mainprice:{
    type:Number
  },
  displayprice:{
    type:Number
  },
  displayspeed:{
    type:Number
  },
  mainspeed:{
    type:Number
  },
  totalsingledomain:{
    type:Number
  },
  totalemailverification:{
    type:Number
  },
  totalemailsearch:{
    type:Number
  },
  totalbuldomainkextract:{
    type:Number
  },
  bulkuploaddomainatatime:{
    type:Number
  }
},{timestamps:true})

const Package = mongoose.model('Package',PackageSchema);
module.exports=Package;
