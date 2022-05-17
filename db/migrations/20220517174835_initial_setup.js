/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
      table.increments('id');
      table.string('bookName', 255).notNullable();
      table.string('author', 255).notNullable();
      table.date('borrowDate');
      table.date('returnDate');
    //   table.foreign('borrowedBy').references('id');
      table.bigInteger('borrowedBy').unsigned().index().references('id').inTable('students');
    });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
    return knex.schema.dropTable('books');
};
