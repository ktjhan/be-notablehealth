exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {id: 1, name: 'Sterling Archer', time: '8:00am', kind: 'New Patient'},
        {id: 2, name: 'Cyril Figis', time: '8:30am', kind: 'Follow-up'},
        {id: 3, name: 'Ray Gilette', time: '9:00am', kind: 'Follow-up'},
        {id: 4, name: 'Lana Kane', time: '9:30am', kind: 'New Patient'},
        {id: 5, name: 'Pam Poovey', time: '10:00am', kind: 'New Patient'}
      ]);
    });
};
