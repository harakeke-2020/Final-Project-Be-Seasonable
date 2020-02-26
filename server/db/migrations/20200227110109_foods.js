exports.up = knex =>
  knex.schema.createTable('foods', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('reo-name')
  })

exports.down = knex => knex.schema.dropTable('foods')
