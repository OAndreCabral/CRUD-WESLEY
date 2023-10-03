// @ts-nocheck
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("Atividade", (table) => {
            table.increments("Id").primary().notNullable()
            table.string("tarefa").notNullable()
            table.string("descricao").notNullable()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema
        .dropTableIfExists("Atividade")
};
