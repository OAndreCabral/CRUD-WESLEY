// @ts-nocheck
const express = require("express");
const tarefaRoutes = require("./src/rotas/tarefas");
const usuarioRoutes = require("./src/rotas/usuario")
const Knex = require("knex")
const { Model } = require("objection")
const knexconfig = require("./knexfile")

const knex = Knex(knexconfig.development);
Model.knex(knex)

const app = express()
app.use(express.json())
app.use(tarefaRoutes)
app.use(usuarioRoutes)

app.listen(3000, () => {
    console.log("Funcionando");
})