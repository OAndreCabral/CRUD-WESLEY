// @ts-nocheck
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("Usuario", (table) => {
            table.increments("Id").primary().notNullable()
            table.string("nome").notNullable()
            table.string("email").notNullable()
            table.string("senha").notNullable()
        })
        .alterTable("Atividade", (table) => {
            table.integer("UsuarioId").unsigned().notNullable()
            table.foreign("UsuarioId").references("Id").inTable("Usuario")
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
