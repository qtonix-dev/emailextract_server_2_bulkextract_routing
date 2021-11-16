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
    // res.send('<h1>SERVER_2_BULK_EXTRACT</h1>');



    const puppeteer = require('puppeteer');
    const cheerio = require('cheerio');

    async function main() {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      await page.setViewport({width: 1200, height: 720});
      await page.goto('http://localhost/project/wordpress/wp-login.php', { waitUntil: 'networkidle0' }); // wait until page load
      await page.type('#user_login', 'b21341995returns');
      await page.type('#user_pass', 'gurubaba@123');
      // click and wait for navigation
      await Promise.all([
        page.click('#wp-submit'),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        // page.goto('http://localhost/project/wordpress/wp-admin/plugins.php')
      ]);

      await page.goto('http://localhost/project/wordpress/wp-admin/plugins.php', { waitUntil: 'networkidle0' })
      const content = await page.content();
      const $ = cheerio.load(content);



      // console.log($.html())


      // $('tbody#the-list > tr > td > strong').toArray().map(item => {
      //   console.log($(item).text());
      //   // console.log(item)
      // });

      var totaldata=[]

      // $('tbody#the-list > tr > td > div > span a').toArray().map(item => {
      //   console.log($(item).attr('href'));
      //   // console.log(item)
      // });


      // $('tbody#the-list > tr > td > div > span a').toArray().map(item => {
      //   console.log($(item).attr('href'));
      //   // console.log(item)
      // });


      $('tbody#the-list > tr').toArray().map(item => {
        // console.log($(item).find('td.plugin-title strong').text());

        var datas={
          pluginname:$(item).find('td.plugin-title.column-primary strong').text(),
          pluginversion:$(item).find('td.column-description.desc div.inactive.second.plugin-version-author-uri').text(),

          activelink:$(item).find('td.plugin-title.column-primary div.row-actions span.activate a').attr('href'),
          deletelink:$(item).find('td.plugin-title.column-primary div.row-actions span.delete a').attr('href'),

        }
        totaldata.push(datas)
        // console.log(item)
      });



      res.json({
        response:true,
        data:totaldata
      })
      console.log(totaldata[0].activelink)

      // await page.goto('http://localhost/project/wordpress/wp-admin/'+totaldata[0].activelink, { waitUntil: 'networkidle0' })


      // await browser.close();
    }

    main();
});







app.get('/themename',(req,res)=>{
    // res.send('<h1>SERVER_2_BULK_EXTRACT</h1>');



    const puppeteer = require('puppeteer');
    const cheerio = require('cheerio');

    async function main() {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      await page.setViewport({width: 1200, height: 720});
      await page.goto('http://localhost/project/wordpress/wp-login.php', { waitUntil: 'networkidle0' }); // wait until page load
      await page.type('#user_login', 'b21341995returns');
      await page.type('#user_pass', 'gurubaba@123');
      // click and wait for navigation
      await Promise.all([
        page.click('#wp-submit'),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        // page.goto('http://localhost/project/wordpress/wp-admin/plugins.php')
      ]);

      await page.goto('http://localhost/project/wordpress/wp-admin/themes.php', { waitUntil: 'networkidle0' })
      const content1 = await page.content();
      const $ = cheerio.load(content1);


      // var theme = $('span:contains("Active:")').text()
      var theme = $('div.theme.active div.theme-id-container h2').text()





      res.json({
        response:true,
        theme:theme
      })
    }

    main();
});









const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

app.use('/api/bulkdomainextract',BulkDomainExtract);
