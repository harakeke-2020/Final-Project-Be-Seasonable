
exports.seed = (knex) =>
knex('water_usages').del()
  .then(() => knex('carbon_outputs').del())
  .then(() => knex('foods').del())
  .then(() => knex('categories').del())
  .then(() =>
    knex('months').insert([
      { id: 1, name: 'January' },
      { id: 2, name: 'VegetablesFe' },
      { id: 3, name: 'Grains, beans, and legumes' },
      { id: 4, name: 'Fish' },
      { id: 5, name: 'Meat' },
      { id: 6, name: 'Animal byproducts' }
    ]))
  .then(() =>
exports.seed = (knex) =>
  knex('foods').insert([
{ id: 1, name: 'Apples', month_id: 5 },
{ id: 2, name: 'Avocados', month_id: 5 },
{ id: 3, name: 'Bananas', month_id: 5 },
{ id: 4, name: 'Beans', month_id: 2 },
{ id: 5, name: 'Broccoli', month_id: 4 },
{ id: 6, name: 'Cabbage', month_id: 4 },
{ id: 7, name: 'Capsicum', month_id: 6 },
{ id: 8, name: 'Carrots', month_id: 5 },
{ id: 9, name: 'Cauliflower', month_id: 6 },
{ id: 10, name: 'Celery', month_id: 5 },
{ id: 11, name: 'Courgettes', month_id: 6 },
{ id: 12, name: 'Cucumber', month_id: 6 },
{ id: 13, name: 'Grapes', month_id: 3 },
{ id: 14, name: 'Kiwifruit', month_id: 2 },
{ id: 15, name: 'Kumara', month_id: 3 },
{ id: 16, name: 'Lettuce', month_id: 1 },
{ id: 17, name: 'Mandarins', month_id: 3 },
{ id: 18, name: 'Mushrooms', month_id: 3 },
{ id: 19, name: 'Onions', month_id: 3 },
{ id: 20, name: 'Oranges', month_id: 3 },
{ id: 21, name: 'Parsnips', month_id: 1 },
{ id: 22, name: 'Pears', month_id: 1 },
{ id: 23, name: 'Pineapple', month_id: 2 },
{ id: 24, name: 'Potatoes', month_id: 2 },
{ id: 25, name: 'Pumpkin', month_id: 1 },
{ id: 26, name: 'Tomatoes', month_id: 1 },
])

