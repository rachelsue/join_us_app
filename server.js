var faker = require('faker');
var mysql = require('mysql');
// var express = require("express");
var path = require("path");

// var app = express();
// var PORT = process.env.PORT || 8080;

// var db = require("./db");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

var connection = mysql.createConnection ({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'join_us'
}); 

//SELECTING DATA

// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function(err, results, fields) {
//   if (err) throw err;
//   console.log(results[0].total);
// });


//INSERTING DATA

var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

connection.query(q, function(err, results, fields) {
  if (err) throw err;
  console.log(results);
});

connection.end();

  