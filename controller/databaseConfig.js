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

               
               //LOCAL CONNECTION
               /* 
               host: "localhost",
               user: "root",
               password: "Chiroptera.5391",
               database: "planner"
               */

               // REMOTE DATABASE CONNECTION
               host: "remotemysql.com",
               user: "57g4ehZ4Vr",
               password: "DhYtmF2RQO",
               database: "57g4ehZ4Vr"
          });
          return conn;
     }
};


//----------------------------------------------
// exports
//----------------------------------------------
module.exports = dbconnect;
