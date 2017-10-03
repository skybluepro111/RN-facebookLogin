var express = require('express');
var app = express();
var request = require('request');
//var apn = require('apn');
const CurrencyApi =  require('./currencyapi.js');
var schedule = require('node-schedule');
 
var rule = new schedule.RecurrenceRule();
rule.minute = 15;
 
var j = schedule.scheduleJob(rule, function(){
  request('http://46.101.100.59:3000');
});

const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient



app.get('/', function (req, res) {
 



request('https://forex.1forge.com/1.0.2/quotes?pairs=EURCHF&api_key=rAEjukOO8GnYVBhn81V89kTswplDMQMF', function (error, response, body) {
  if (!error && response.statusCode == 200) {

    test = JSON.parse(response.body);

    price = test[0].price;
    console.log("Preis:" +price);
    //test_2 = res.json({"price": price});
    //console.log(test_2);  
    res.send({price})  ;
    test = CurrencyApi(price);
      console.log(test);
    
      
  }
}
       )


}); 



var db

MongoClient.connect('mongodb://admin:Berlin2015@ds033986.mlab.com:33986/renting', (err, database) => {
  if (err) return console.log(err)
  db = database
})



app.post('/renters', (req, res) => {
  console.log(req.body)
  db.collection('renters').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

app.get('/settings', (req, res) => {
  db.collection('renters').find().toArray((err, result) => {
    console.log(results)
    // renders index.ejs
  })
});







app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



