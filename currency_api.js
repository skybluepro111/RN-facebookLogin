var currencyApi = function(data) {
  
var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic MDUxYTFjOTAtOGI4My00ZjYzLTlkZGUtZmIzNWVlNmZiNDhm"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "e223b19b-59ab-4c2b-8a22-900b4b796dee",
  contents: {"en": "Halli Hallo mein Schatz"},
  included_segments: ["All"]
};

sendNotification(message);
    
};

module.exports = currencyApi;