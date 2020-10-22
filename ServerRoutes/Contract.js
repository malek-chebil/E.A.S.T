// const router = require("./Client");
const express = require("express");
const router = express.Router();
 

router.post('/Upload', (req,res)=>{
    console.log('request =>',req.body);
    console.log('response =>',res);
})

module.exports = router;
