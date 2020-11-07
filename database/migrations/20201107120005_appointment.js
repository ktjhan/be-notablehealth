exports.up = function(knex) {
    return knex.schema.createTable('appointment', appointment => {
      appointment.increments();
      appointment.string('name', 255);
      appointment.time('time');
      appointment.string('kind', 255);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('appointment');
  };

