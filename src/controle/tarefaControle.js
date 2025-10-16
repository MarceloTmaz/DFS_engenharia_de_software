const express = require('express');
const  Tarefa  = require('../tarefa/Tarefa');

class TarefaControle {
    constructor() {
        this.vetTarefa = [];
        const t = new Tarefa(1, 'Comprar pão', "comprar pão doce na padaria 'nosso pão'", false, 2, 1);
        this.vetTarefa.push(t);
        const t2 = new Tarefa(2, 'Instalar SO', "Instalar linux no notebook acer aspire 3", false, 3, 1);
        this.vetTarefa.push(t2);
        this.ids=3;
    }

    criar(req, res) {
        const dados = {
            titulo: "criar tarefa"
        };
        res.render('Cadastro_Tarefa', { dados });
    }
    criarPost(req,res){
        const{titulo,descricao,esforco}=req.body
        //console.log(esforco)
        const t=new Tarefa(this.ids,titulo,descricao,false,parseInt(esforco),1);
        this.vetTarefa.push(t)
        this.ids+=1
        const dados={
            'titulo':"Listar tarerfas",
            'total':this.vetTarefa
        }
        res.render('listarTarefa',{dados})
    }
    listar(req,res){
        const dados={
            'titulo':"Listar tarefa",
            'total':this.vetTarefa,
        }
        res.render('listarTarefa',{dados})
    }
    status(req,res){
        const id=req.body.id
        for (let index = 0; index < this.vetTarefa.length; index++) {
            if(this.vetTarefa[index].id==id){
                this.vetTarefa[index].status=!this.vetTarefa[index].status
                break;
            }
        }
         const dados={
            'titulo':"Listar tarefa",
            'total':this.vetTarefa,
        }
        res.render('listarTarefa',{dados})
    }
    remover(req,res){
         const id=req.body.id
        for (let index = 0; index < this.vetTarefa.length; index++) {
            if(this.vetTarefa[index].id==id){
               this.vetTarefa.splice(index,1);
                break;
            }
        }
         const dados={
            'titulo':"Listar tarefa",
            'total':this.vetTarefa,
        }
        res.render('listarTarefa',{dados})
    }
}

module.exports = { TarefaControle };
