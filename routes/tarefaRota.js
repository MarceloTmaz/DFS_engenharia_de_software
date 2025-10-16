const express = require('express');
const { TarefaControle } = require('../src/controle/tarefaControle');

const router = express.Router();
const tarefaControle = new TarefaControle();

// Defina as rotas chamando os métodos da classe
router.get('/criar', (req, res) => tarefaControle.criar(req, res));
router.post('/criar',(req,res)=>tarefaControle.criarPost(req, res))
router.get('/listar',(req,res)=>tarefaControle.listar(req, res))
router.post('/trocarStatus',(req,res)=>tarefaControle.status(req, res))
router.post('/remover',(req,res)=>tarefaControle.remover(req, res))

module.exports = router;
