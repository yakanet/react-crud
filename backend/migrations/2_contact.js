exports.up = function(knex, Promise) {
    //  public id?: number,
    //         public name?: string,
    //         public email?: string,
    //         public creationDate?
    return knex.schema.createTableIfNotExists('contacts', function(table) {
        table.increments();
        table.string('name').notNullable().unique();
        table.string('email').notNullable();
        table.dateTime('creationDate').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts');
};
