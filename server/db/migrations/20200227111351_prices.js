exports.up = knex =>
  knex.schema.createTable('prices', (table) => {
    table.increments('id').primary()
    table.integer('food_id').references('foods.id')
    table.integer('month')
    table.double('price')
  })

exports.down = knex => knex.schema.dropTable('prices')
