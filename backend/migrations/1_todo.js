exports.up = function(knex, Promise) {
    //  public id?: number,
    //         public name?: string,
    //         public archived?: boolean,
    return knex.schema.createTableIfNotExists('todos', function(table) {
        table.increments();
        table.string('name').notNullable().notNullable();
        table.binary('archived', 1).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos');
};
