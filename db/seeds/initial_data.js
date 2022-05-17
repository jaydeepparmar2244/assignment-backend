/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1, bookName: 'Power of Subconscious Mind', author:'Joseph Murphy',borrowDate:'2022-05-16',returnDate:'2022-05-23',borrowedBy:'1'},
        { id: 2, bookName: 'Harry Potter', author:'Joanne Kathleen Rowling',borrowDate:'2022-05-17',returnDate:'2022-05-28',borrowedBy:'1'},
        { id: 3, bookName: 'Atomic Habits', author:'James Clear'}
      ]);
    });
};
