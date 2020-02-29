exports.up = knex =>
  knex.schema.createTable('foods', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('reo_name')
    table.string('average_price')
    table.string('image')
    table.boolean('nz_grown')
    table.integer('last_month')
    table.integer('first_month')
  })

exports.down = knex => knex.schema.dropTable('foods')
