const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const result = require('dotenv').config();


const BulkDomainExtract = require('./routes/bulkdomainextract');


//===DATABASE CONNECTION===
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology:true});


const db = mongoose.connection;

db.on('error',(err)=>{
    console.log('Failed to connect.')
    console.log(err);
});
db.once('open',()=>{
    console.log('Successfully Connected.');
})
//===DATABASE CONNECTION===



const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({
 extended: true,
 limit: '50mb',
 parameterLimit: 100000
 }))

app.use(bodyParser.json({
 limit: '50mb',
 parameterLimit: 100000
}))

app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('<h1>SERVER_2_BULK_EXTRACT</h1>');
});


const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

app.use('/api/bulkdomainextract',BulkDomainExtract);
