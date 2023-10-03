const Usuario = require("../models/usuario")

const getAllUsuario = () => {
    return Usuario.query().select()
}
const createUsuarios = (nome, email, senha) => {
    return Usuario.query().insert({
        nome: nome,
        email: email,
        senha: senha
    })
}

module.exports = {
    getAllUsuario,
    createUsuarios,
}