
exports.up = function(knex) {
  return knex.schema.createTable('memes', (table)=>{
    table.increments('id').primary()
    table.string('memetype')
    table.string('description')
    table.string('photo')
  })
};

exports.down = function(knex) {
 
  return knex.schema.dropTable('memes')
};
