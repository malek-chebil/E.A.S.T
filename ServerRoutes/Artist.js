const express = require("express");
var router = express.Router();
const Artist = require("../Data-Base/artist/artist");

/*Login Artist*/

router.post("/Login", function (req, res, next) {
  console.log(req.body);
  Artist.loginArtist(req.body, (result, error) => {
    if (result.userData) {
      result.userData.type = "Artist";
      delete result.userData.password;
      res.send({ Login: true, userData: result.userData });
    } else {
      res.send({ Login: false, userData: result.userData });
    }
  });
});
/*Signup Artist*/

router.post("/Signup", function (req, res, next) {
    console.log(req.body);
  if (Object.keys(req.body).length) {
    
    Artist.SignupArtist(req.body, (result, error) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          res.send({ Dup: true });
        }
      } else {
        res.send({ Signup: true });
      }
    });
  } else {
    res.send({ Signup: false });
  }
});

module.exports = router;
//{FisrtName:'alaa',LastName:'lassoued',Email:'d',Password:'0000',Gender:'hello',Age:21,City:'tunis',Adresse:"mg",Field:"designe"}
