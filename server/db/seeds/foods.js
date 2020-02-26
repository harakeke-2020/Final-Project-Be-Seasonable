
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
{ id: 1, name: 'Apples', reo_name: 'Āporo'},
{ id: 2, name: 'Avocados', reo_name: 'Awakato'},
{ id: 3, name: 'Bananas', reo_name: 'Panana'},
{ id: 4, name: 'Beans', reo_name: 'Pīni'},
{ id: 5, name: 'Broccoli', reo_name: 'Porokori'},
{ id: 6, name: 'Cabbage', reo_name: 'Kāpeti'},
{ id: 7, name: 'Capsicum', reo_name: 'Rapikama'},
{ id: 8, name: 'Carrots', reo_name: 'Kāroti'},
{ id: 9, name: 'Cauliflower', reo_name: 'Kareparāoa'},
{ id: 10, name: 'Celery', reo_name: 'Herewī'},
{ id: 11, name: 'Courgette', reo_name: 'Roroa iti'},
{ id: 12, name: 'Cucumber', reo_name: 'Kūkama'},
{ id: 13, name: 'Grapes', reo_name: 'Kerepi'},
{ id: 14, name: 'Kiwifruit', reo_name: 'Huakiwi'},
{ id: 15, name: 'Kumara', reo_name: 'Kūmara'},
{ id: 16, name: 'Lettuce', reo_name: 'Rētihi'},
{ id: 17, name: 'Mandarins', reo_name: 'Manarini'},
{ id: 18, name: 'Mushrooms', reo_name: 'Harore'},
{ id: 19, name: 'Onions', reo_name: 'Riki'},
{ id: 20, name: 'Oranges', reo_name: 'Ārani'},
{ id: 21, name: 'Parsnips', reo_name: 'Tāmore mā'},
{ id: 22, name: 'Pears', reo_name: 'Pea'},
{ id: 23, name: 'Pineapple', reo_name: 'Paināporo'},
{ id: 24, name: 'Potatoes', reo_name: 'Rīwai'},
{ id: 25, name: 'Pumpkin', reo_name: 'Paukena'},
{ id: 26, name: 'Tomatoes', reo_name: 'Tōmato'}
])

