exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('doctor').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctor').insert([
        {id: 1, name: 'Hibbert, Julius'},
        {id: 2, name: 'Krieger, Algernop'},
        {id: 3, name: 'Riviera, Nick'}
      ]);
    });
};
