const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  loginid:{
    type:String
  },
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  company:{
    type:String
  },
  contact:{
    type:String
  },
  city:{
    type:String
  },
  type:{
    type:String
  },
  packageid:{
    type:String
  },
  packagename:{
    type:String
  },
  packagetype:{
    type:String
  },
  packagestartdate:{
    type:Date,
  },
  packageenddate:{
    type:Date,
  },
  packagetempstartdate:{
    type:Date,
  },
  packagetempenddate:{
    type:Date,
  },
  packageenddatenumber:{
    type:Number
  },
},{timestamps:true})

const User = mongoose.model('User',UserSchema);
module.exports=User;
