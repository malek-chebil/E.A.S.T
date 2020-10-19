const express = require('express')
var router = express.Router();
const Client = require('../Data-Base/client/dist')
               
            /*Login*/
router.get('/login', function(req, res, next) {
 console.log(Client.clientLogin(req.body))
    res.send('respond with a resource');
  });
           /*SignUp*/
router.get('/signup', function(req, res, next) {

    res.send('respond with %M resource');
  });
  
module.exports=router