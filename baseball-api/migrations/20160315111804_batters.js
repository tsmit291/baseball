exports.up = function(knex, Promise) {
  return knex.schema.createTable('batters', function(table){
    table.increments();
    table.text('category');
    table.text('alias');
    table.text('firstName');
    table.text('lastName');
    table.float('AB');
    table.float('R');
    table.float('H');
    table.float('2B');
    table.float('3B');
    table.float('HR');
    table.float('RBI');
    table.float('BB');
    table.float('SO');
    table.float('SB');
    table.float('CS');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('batters');
};
