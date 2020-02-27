exports.up = knex =>
  knex.schema.createTable('foods', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('reo_name')
    table.string('average_price')
    
  })

exports.down = knex => knex.schema.dropTable('foods')
