exports.up = function(knex) {
    return knex.schema.createTable('doctor', doctor => {
      doctor.increments();
      doctor.string('name', 255);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('doctor');
  };
