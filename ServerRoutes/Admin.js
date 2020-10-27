const express = require('express');
const { useCallback } = require('react');

var router = express.Router();

router.post('/AdminLogin',(req,res)=>{ 
    if(req.body.password==4444&&req.body.name=="admin"){
      res.send({admin:true})
    }else{
      banaccount(req.body,res)
    }
  })

  router.post("/banaccount", async (req, res) => {
    console.log(req.body)
   banaccount(req.body.Email,req.body.date,req.body.reason,res)
    });
