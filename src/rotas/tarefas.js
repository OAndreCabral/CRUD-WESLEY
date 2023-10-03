const express = require("express");
const tarefaController = require("../controller/tarefa-controller")

const router = express.Router()

router.get("/tarefas", tarefaController.findAll)

router.post("/tarefa", tarefaController.createTarefa)

router.put("/tarefa/:id", tarefaController.updateTarefa)

router.delete("/tarefas/:id", tarefaController.deleteTarefa)

module.exports = router

