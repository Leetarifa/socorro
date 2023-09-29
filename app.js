const express = require ("express")
const app = express ()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require ("./model/post")



app.engine("handlebars", handlebars({defaultLayout:"main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get ("/", function(req,res){
    res.render("primeira_pagina")

})

app.get("/consulta", function(req,res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados: "+erro)
    })
})

app.post("/cadastrar", function(req,res){
    post.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep
    }).then(function(){
        console.log("dados cadastrados com sucesso")
        res.send("Cadastro realizado com sucesso!")
    }).catch(function(erro){
        console.log("Erro ao cadastrar: " + erro)
    })
})

app.get("/excluir/:id", function (req,res){
    post.destroy({where:{'id': req.params.id}}).then(function(){
        res.render("primeira_pagina")
    }).catch(function(erro){
        console.log("Erro ao excluir: " + erro)
    })
})
app.get("/editar/:id", function(req, res){
    post.findAll({where: {'id' : req.params.id}}).then(function(post){
        res.render("editar", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar: "+ erro)
    })
})
app.post("/atualizar", function(req,res){
    post.update({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro:req.body.bairro,
        cep: req.body.cep,
        observacao: req.body.observacao
    },{
        where: {
            id: req.body.id
        }
    }).then(function(){
        res.redirect("/consulta")
    })
})

app.listen(8081, function(){
    console.log("Servidor")
})

