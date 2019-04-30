var mysql = require('mysql');

var con = mysql.createConnection({
  host: "hostofdatabase",
  user: "userofdatabase",
  password: "passwordofdatabase",
  database: "nameofdatabase"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
