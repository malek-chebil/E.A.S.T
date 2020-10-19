const connection =require("../database")
var bcrypt = require("bcryptjs")
const {get} = require("../../ServerRoutes/Client")
connection.query(`SELECT * FROM client where Email = ${"malek1203@gmail.com"}`, function(error, results,fields) {
    if (error) throw error;
})

var loginClient =(req,callback) => {

    connection.query(`INSERT INTO CLIENT (FirstName , LastName , Email , Field , Gender , Age , City , Adresse ) values ('${req.FirstName}', '${req.LastName},'${req.Email},'${req.Field},'${req.Gender}, '${req.Age}, '${req.City}, '${req.Adresse}')`) 
}


module.exports = {
    loginClient
}