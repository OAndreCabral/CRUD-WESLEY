const { getallTarefas, createTarefas, updateTarefas, deleteTarefas } = require("../services/tarefa-service")

const findAll = async (request, response) => {
    try {
        const tarefas = await getallTarefas()
        response.json(tarefas)
    } catch (error) {
        response.status(404).send(error);
    }
}

const createTarefa = async (request, response) => {
    try {
        const { tarefa, descricao, UsuarioId } = request.body
        const newTarefa = await createTarefas(tarefa, descricao, UsuarioId)
        response.json(newTarefa)
    } catch (error) {
        console.log(error);
        response.status(404).send(error);
    }
}

const updateTarefa = async (request, response) => {
    try {
        const { id } = request.params;
        const updatedTarefa = await updateTarefas(id, request.body)
        response.json(updatedTarefa)
    } catch (error) {
        console.log(error);
        if (error.type == "ModelValidation") {
            return response.json(error.data.tarefa.message)
        }
        response.status(404).send("Errorrrrrrr");
    }
}

const deleteTarefa = async (request, response) => {
    try {
        const { id } = request.params;
        const deletedTarefa = await deleteTarefas(id)
        response.json(deletedTarefa)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    findAll,
    createTarefa,
    updateTarefa,
    deleteTarefa,
}