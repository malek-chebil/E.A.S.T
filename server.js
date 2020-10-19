const express = require('express')
const {connection}=require("./Data-Base/database")
const PORT = 3000
const app = express()
const client=require("./ServerRoutes/Client")
const Freelancer=require("./ServerRoutes/FreeLancer")

app.use(express.json()); 
app.use(express.static(__dirname + '/client/dist'));

         /* Db Connection*/

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

          /*Routes*/

app.use('/Client', client);
app.use('/FreeLancer', Freelancer);

        /*Server Connection*/

app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 