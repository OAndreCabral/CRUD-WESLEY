const Tarefa = require("../models/tarefa");

const getallTarefas = () => {
    return Tarefa.query().join("Usuario", "Usuario.Id", "=", "Atividade.UsuarioId").select()
}

const createTarefas = async (tarefa, descricao, UsuarioId) => {
    return await Tarefa.query().insert({
        tarefa: tarefa,
        descricao: descricao,
        UsuarioId: UsuarioId,
    })
}

const updateTarefas = async (id, tarefa,) => {
    return await Tarefa.query()
        .findById(id)
        .update(tarefa)
}

const deleteTarefas = async (id) => {
    return await Tarefa.query()
        .deleteById(id)
}

module.exports = {
    getallTarefas,
    createTarefas,
    updateTarefas,
    deleteTarefas,
}