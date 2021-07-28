console.log("----------------------------------------");
console.log("Planner App > backend > controller > databaseConfig.js");
console.log("---------------------------------------");

//----------------------------------------------
// imports
//----------------------------------------------
var mysql = require('mysql');

//----------------------------------------------
// objects/ functions
//----------------------------------------------
var dbconnect = {
     getConnection: function () {
          var conn = mysql.createConnection({
               host: "localhost",
               user: "root",
               password: "Chiroptera.5391",
               database: "planner"
          });
          return conn;
     }
};


//----------------------------------------------
// exports
//----------------------------------------------
module.exports = dbconnect;
