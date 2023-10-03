const { Model } = require("objection");
const Usuario = require("./usuario");

class Tarefa extends Model {
    static tableName = "Atividade"
    static get jsonSchema() {
        return {
            type: "object",
            required: ["tarefa", "descricao"],
            properties: {
                id: { type: "integer" },
                tarefa: { type: "string", maxLength: 255 },
                descricao: { type: "string", maxLength: 255 },
                UsuarioId: { type: "integer" }
            }
        }
    }
    static relationMappings = {
        usuario: {
            relation: Model.HasOneRelation,
            modelClass: Usuario,
            join: {
                from: 'Atividade.UsuarioId',
                to: 'Usuario.id'
            }
        }
    }
}

module.exports = Tarefa;