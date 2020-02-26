
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
knex('foods').del()
.then(() => 
  knex('foods').insert([
{ id: 1, name: 'Apples', 
{ id: 2, name: 'Avocados',
{ id: 3, name: 'Bananas', 
{ id: 4, name: 'Beans',
{ id: 5, name: 'Broccoli',
{ id: 6, name: 'Cabbage', 
{ id: 7, name: 'Capsicum',
{ id: 8, name: 'Carrots', 
{ id: 9, name: 'Cauliflower',
{ id: 10, name: 'Celery', 
{ id: 11, name: 'Courgette',
{ id: 12, name: 'Cucumber'
{ id: 13, name: 'Grapes', 
{ id: 14, name: 'Kiwifruit',
{ id: 15, name: 'Kumara', 
{ id: 16, name: 'Lettuce',
{ id: 17, name: 'Mandarins',
{ id: 18, name: 'Mushrooms',
{ id: 19, name: 'Onions', 
{ id: 20, name: 'Oranges',
{ id: 21, name: 'Parsnips'
{ id: 22, name: 'Pears', 
{ id: 23, name: 'Pineapple',
{ id: 24, name: 'Potatoes'
{ id: 25, name: 'Pumpkin',
{ id: 26, name: 'Tomatoes'
])

