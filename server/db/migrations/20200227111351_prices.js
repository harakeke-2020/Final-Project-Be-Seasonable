exports.up = knex =>
  knex.schema.createTable('prices', (table) => {
    table.increments('id').primary()
    table.integer('food_id')
    table.integer('month_id')
    table.double('price')
  })

exports.down = knex => knex.schema.dropTable('prices')
