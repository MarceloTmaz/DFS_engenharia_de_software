var express = require('express');
const {UsuarioControle}=require('../src/controle/UsuarioControle')

var router = express.Router();

const usuarioControle=new UsuarioControle();

router.get('/perfil', (req, res) => usuarioControle.perfil(req, res));
router.get('/login',(req,res)=>usuarioControle.login(req, res));
router.post('/login',(req,res)=>usuarioControle.loginPost(req, res));


module.exports = router;
