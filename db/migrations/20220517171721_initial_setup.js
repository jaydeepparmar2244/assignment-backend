/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('students', function (table) {
      table.increments('id');
      table.string('firstName', 255).notNullable();
      table.string('lastName', 255).notNullable();
    });
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
    return knex.schema.dropTable('students');
  };