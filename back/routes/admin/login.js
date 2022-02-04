var express = require('express');
var router = express.Router();
var usuario = require ('./../../models/usuarios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{
        layout:'admin/layout'
  });
});

router.post('/', async (req, res, next) => { 
  try {
    var usuario =req.body.usuario;
    var password = req.body.password;

    var data = await usuarios.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      res.redirect('/contacto');
        }
    else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
          });
      }
    }
    catch (error){
      console.log(error);
    }
  });    
  



module.exports = router;
