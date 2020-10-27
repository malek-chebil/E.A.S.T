const { get} = require("../../ServerRoutes/Admin");




const loginAdmin= (req,callback)=>{
    var userData=null
    var password=null
       connection.query(`SELECT * from Clients where Email="${req.Email}"`, function (error, results, fields) {
           if(results.length){
               userData=results[0]
               password=results[0].password
               console.log(results)
               {bcrypt.compareSync(req.Password, password)?callback({error:null,userData}):callback({error:"Wrong Password",userData:null})}
           }else{
               callback({error:"Email Unvalid",userData:null})
           }
         }); 

  }