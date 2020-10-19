var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Malouka33',
  database : 'east'
});

module.exports={
    connection
}