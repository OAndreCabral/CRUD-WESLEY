const { Model } = require("objection");
const Tarefa = require("./tarefa");

class Usuario extends Model {
    static tableName = "Usuario"
    static get jsonSchema() {
        return {
            type: "object",
            required: ["email", "senha"],
            properties: {
                id: { type: "integer" },
                nome: { type: "string", maxLength: 50 },
                email: { type: "string", maxLength: 255 },
                senha: { type: "string", maxLength: 255, }
            }
        }
    }
    static relationMappings = {
        Tarefa: {
            relation: Model.HasManyRelation,
            modelClass: Tarefa,
            join: {
                from: 'Usuario.id',
                to: 'Tarefa.UsuarioId'
            }
        }
    }
}

module.exports = Usuario;