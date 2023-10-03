const { getAllUsuario, createUsuarios } = require("../services/usuario-service")

const findAllUsuario = async (request, response) => {
    try {
        const usuarios = await getAllUsuario()
        response.json(usuarios)
    } catch (error) {
        response.status(400).send(error)
    }
}

const createUsuario = async (request, response) => {
    try {
        const { body } = request;
        const { nome, email, senha } = body
        const newUsuario = await createUsuarios(nome, email, senha)
        response.json(newUsuario)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    findAllUsuario,
    createUsuario
}