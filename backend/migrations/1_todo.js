exports.up = function(knex, Promise) {
    //  public id?: number,
    //         public name?: string,
    //         public archived?: boolean,
    //         public dueDate?: Date
    return knex.schema.createTableIfNotExists('todos', function(table) {
        table.increments();
        table.string('name').notNullable().unique();
        table.binary('archived', 1).notNullable();
        table.dateTime('dueDate').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos');
};
