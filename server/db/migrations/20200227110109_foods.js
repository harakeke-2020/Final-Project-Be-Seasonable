exports.up = knex =>
  knex.schema.createTable('foods', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('reo_name')
    table.string('average_price')
    table.boolean('nz_grown')
    table.integer('last_month')
    table.integer('first_month')
    table.string('details')
    table.string('image')
    table.string('info_link')
    table.string('chart')
  })

exports.down = knex => knex.schema.dropTable('foods')
