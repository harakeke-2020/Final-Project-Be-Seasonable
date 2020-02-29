const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getInSeasonFoods (month, db = connection) {
  return db('foods')
    .join('prices', 'foods.id', 'prices.food_id')
    .where('prices.month', month)
    .select('foods.id as id', 'foods.name', 'foods.reo_name as reoName', 'prices.month', 'prices.price', 'foods.image', 'foods.nz_grown as nzGrown', 'foods.last_month as lastMonth', 'foods.first_month as firstMonth')
}

module.exports = {
  getInSeasonFoods
}
