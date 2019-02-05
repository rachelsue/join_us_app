var faker = require('faker');
var mysql = require('mysql');
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("./db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var connection = mysql.createConnection ({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'join_us'
}); 

var q = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now'
connection.query(q, function(err, results, fields) {
  if (err) throw err;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
})

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected on " + connection.threadId);
//     connection.end();
//   });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 


  