const express = require('express');
const client = require('../Data-Base/client/client');
var router = express.Router();
const Client=require("../Data-Base/client/client")

             /*Login Client*/

router.post('/Login', function(req, res, next) {
  if(Object.keys(req.body).length){
    Client.loginClient(req.body,(result,error)=>{
      if(result.userData){
        result.userData.type="client"
          delete result.userData.password
  res.send({Login:true,userData:result.userData})
      }else{
  res.send({Login:false,userData:result.userData})
 }
  })
  }else{
    res.send({Login:false,userData:null})
  }
  });
             /*Signup Client*/

router.post('/Signup', function(req, res, next) {
  console.log(req.body)
if(Object.keys(req.body).length){
  Client.SignupClient(req.body,(result,error)=>{
    if(error){
        if(error.code=="ER_DUP_ENTRY"){
            res.send({Dup:true})
           }else{
             throw error
            //  res.send(error)
           }
      }else{
            res.send({Signup:true})
          }
      })
}else{
  res.send({Signup:false})
}
});

module.exports=router

