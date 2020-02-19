
exports.up = function(knex) {
    knex.schema.createTable('comment', (table) => {
        table.increments('id').primary()
        table.string('comment')
};

exports.down = function(knex) {
    return knex.schema.dropTable('comment')
};
