var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Malouka33',
  database : 'east'
});
         /* Db Connection*/

connection.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
  });

  const banaccount=async function(Email,reason,date,res){
    var ban={Banned:true,reason:reason,date:date}
    await Users.update({Email:Email},{AccountStatus:ban}).then(data=>{
      console.log(data)
      res.send()
    })
  }
module.exports={
  connection,
  banaccount
}