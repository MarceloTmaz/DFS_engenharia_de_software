const express = require('express');
const  Usuario  = require('../usuario/Usuario');

class UsuarioControle {
    constructor() {
        this.email=""
    }


    perfil(req, res) {
        const dados = {
            titulo: "Perfil"
        };
        res.render('perfil', { dados });
    }

    login(req, res) {
        const dados = {
            titulo: "Login"
        };
        res.render('login', { dados });
    }

    async loginPost(req, res) {
        const { email, senha } = req.body;
        const usuario = new Usuario(email, senha);

        try {
            await usuario.login(email, senha);
            const dados = {
            titulo: "Perfil",
            email: usuario.email
            };
            res.render('perfil', { dados });
        } catch (error) {
            console.error("Erro no login:", error.message);
            const dados = {
            titulo: "Login"
            }
            res.render('login', { dados });
        }
    }
}

module.exports = { UsuarioControle };