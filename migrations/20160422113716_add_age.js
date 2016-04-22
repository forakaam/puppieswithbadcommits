exports.up = function(knex, Promise) {
  return knex.schema.table('puppies',function(table){
    table.integer('age');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('puppies',function(table){
    table.dropColumn('age');
  })
};
