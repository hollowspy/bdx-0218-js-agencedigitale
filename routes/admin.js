var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

/* GET administration page */
router.get('/', function(req, res, next) {
  res.render('admin', { bodyClass:'admin'});
});

/* POST administration page */
router.post('/', function(req, res, next) {
  var email=req.body.email;
  var password=req.body.password;

  connection.query('SELECT * FROM login WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
        res.json({
          status:false,
          message:'there are some error with query'
          })
    }else{
      console.log(results);
      if(results.length >0){
        if(results[0].password == password){
            // res.redirect('/administration');
            res.json({
                status:true,
                message:'successfully authenticated'
            })
        }else{
            res.json({
              status:false,
              message:"Email and password does not match"
             });
        }
      }
      else{
        res.json({
            status:false,
          message:"Email does not exits"
        });
      }
    }
  });
});


module.exports = router;
