exports.seed = (knex) =>
  knex('prices').del()
    .then(() => knex('foods').del())
    .then(() =>
      knex('foods').insert([
        { id: 1, name: 'Apples', reo_name: 'Āporo', average_price: 2.80, nz_grown: true, last_month: 9, first_month: 3, details: 'Largely grown in the Waikato, Gisborne, Hawkes Bay, Canterbury, Otago and Nelson regions. Varieties grown in New Zealand include Royal Gala, Braeburn, Jazz, New Zealand Rose and Red Delicious.', image: '/apples', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/apples/', chart: 'WNZOpEoBKRyz4hBh-kpiumjjAxI9LmsSz' },
        { id: 2, name: 'Avocados', reo_name: 'Awakato', average_price: 9.71, nz_grown: true, last_month: 3, first_month: 7, details: 'Largely grown in the Northland, Bay of Plenty, Waikato and Auckland regions. Varieties grown in New Zealand include Hass, Reed, Fuerte and Carmen.', image: '/avocados', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/avocado/', chart: 'WNZOpEoBKRyz4hBh-diC4oq9ziy2sNe9N' },
        { id: 3, name: 'Bananas', reo_name: 'Panana', average_price: 2.71, nz_grown: false, details: 'The majority of Bananas available in New Zealand are imported from Ecuador, Philippines and Mexico.', image: '/bananas', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/bananas/', chart: 'WNZOpEoBKRyz4hBh-EBxjLEuL1K91eiwp' },
        { id: 4, name: 'Beans', reo_name: 'Pīni', average_price: 12.61, nz_grown: true, last_month: 4, first_month: 1, details: 'Largely grown in the Canterbury and Hawkes Bay regions. Varieties grown in New Zealand include Green, Flat and Butter Beans.', image: '/beans', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/beans/', chart: 'WNZOpEoBKRyz4hBh-3ahny5wea0OIBf1O' },
        { id: 5, name: 'Broccoli', reo_name: 'Porokori', average_price: 5.76, nz_grown: true, details: 'Largely grown in the Auckland, Manawatu, Otago and Gisbourne regions.', image: '/broccoli', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/broccoli/', chart: 'WNZOpEoBKRyz4hBh-SYpbEU3kls3iLdWY' },
        { id: 6, name: 'Cabbage', reo_name: 'Kāpeti', average_price: 1.94, nz_grown: true, details: 'Largely grown in the Auckland, Manawatu and Gisborne regions.Varieties grown in New Zealand include red, green and white cabbages. ', image: '/cabbage', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/cabbage/', chart: 'WNZOpEoBKRyz4hBh-RDThY0d7m7uEfpaD' },
        { id: 7, name: 'Capsicum', reo_name: 'Rapikama', average_price: 12.33, nz_grown: true, last_month: 4, first_month: 10, details: 'Largely grown indoors in the Auckland and Waikato regions.', image: '/capsicum', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/capsicum/', chart: 'WNZOpEoBKRyz4hBh-CYOOHxSmvKK0if3J' },
        { id: 8, name: 'Carrots', reo_name: 'Kāroti', average_price: 2.10, nz_grown: true, last_month: 9, first_month: 4, details: 'Largely grown in the Canterbury, Auckland and southland regions.', image: '/carrots', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/carrots/', chart: 'WNZOpEoBKRyz4hBh-avd9Ixi7LkbSBUxS' },
        { id: 9, name: 'Cauliflower', reo_name: 'Kareparāoa', average_price: 3.36, nz_grown: true, details: 'Largely grown in the Auckland, Manawatu and Gisbourne regions.', image: '/cauliflower', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/cauliflower/', chart: 'WNZOpEoBKRyz4hBh-D5hM4DAAFhCxynYK' },
        { id: 10, name: 'Celery', reo_name: 'Herewī', average_price: 3.31, nz_grown: true, last_month: 7, first_month: 3, details: '', image: '/celery', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/celery/', chart: 'WNZOpEoBKRyz4hBh-Eb4injOfXJYyaofk' },
        { id: 11, name: 'Courgette', reo_name: 'Roroa iti', average_price: 8.34, nz_grown: true, last_month: 5, first_month: 11, details: '', image: '/courgette', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/courgette/', chart: 'WNZOpEoBKRyz4hBh-DLWaRrxHDU1VWD8w' },
        { id: 12, name: 'Cucumber', reo_name: 'Kūkama', average_price: 7.43, nz_grown: true, last_month: 4, first_month: 10, details: 'Varieties grown in New Zealand include Telegraph, Short, Lebanese, Apple and Gherkin. Largely grown in the Auckland, Canterbury and Waikato regions.', image: '/cucumber', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/cucumber/', chart: 'WNZOpEoBKRyz4hBh-wspyrryM3sB8RRq4' },
        { id: 13, name: 'Grapes', reo_name: 'Kerepi', average_price: 7.30, nz_grown: false, details: 'The majority of Grapes available in New Zealand are imported from Australia and the U.S.A.', image: '/grapes', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/grapes-green/', chart: 'WNZOpEoBKRyz4hBh-eTtJsMrKsPqXyu6f' },
        { id: 14, name: 'Kiwifruit', reo_name: 'Huakiwi', average_price: 3.58, nz_grown: true, last_month: 11, first_month: 5, details: 'Largely grown in the Bay of Plenty, Northland and Auckland regions.The main variety grown in New Zealand is the Hayward.', image: '/kiwifruit', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/kiwifruit-green/', chart: 'WNZOpEoBKRyz4hBh-CPBA7tlMzUy1fvQt' },
        { id: 15, reo_name: 'Kūmara', average_price: 5.29, nz_grown: true, details: 'Largely grown in Northland in the Northern Wairoa region. Varieties of kūmara include gold, red and orange kūmara.', image: '/kumara', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/k%C5%ABmara/', chart: 'WNZOpEoBKRyz4hBh-fHVNSo9rUmVDMTKI' },
        { id: 16, name: 'Lettuce', reo_name: 'Rētihi', average_price: 4.30, nz_grown: true, last_month: 4, first_month: 10, details: 'Largely grown in the Auckland, Manawatu-Wanganui, Gisborne, Tasman-Nelson and Canterbury regions.', image: '/lettuce', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/lettuce/', chart: 'WNZOpEoBKRyz4hBh-hVAZeXw1rjX1jpkl' },
        { id: 17, name: 'Mandarins', reo_name: 'Manarini', average_price: 5.22, nz_grown: true, last_month: 11, first_month: 5, details: 'Largely grown in the Northland and Gisbourne regions.', image: '/mandarins', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/mandarins/', chart: 'WNZOpEoBKRyz4hBh-sDOeBx1839LLlW7L' },
        { id: 18, name: 'Mushrooms', reo_name: 'Harore', average_price: 10.57, nz_grown: true, details: 'Largely grown in the Canterbury and Auckland regions.', image: '/mushrooms', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/mushrooms/', chart: 'WNZOpEoBKRyz4hBh-3uFIlPioBIKtUs8v' },
        { id: 19, name: 'Onions', reo_name: 'Riki', average_price: 2.07, nz_grown: true, last_month: 9, first_month: 5, details: 'Largely grown in the Auckland, Waikato, Canterbury, and Hawke’s Bay regions.', image: '/onions', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/onions/', chart: 'WNZOpEoBKRyz4hBh-dn3zaBy8jiHz1Epm' },
        { id: 20, name: 'Oranges', reo_name: 'Ārani', average_price: 3.29, nz_grown: true, last_month: 11, first_month: 8, details: 'Largely grown in Gisborne with navel oranges accounting for 75% of total oranges grown in the region. Main navel varieties are Navelina, Newhall and Parent Gold.', image: '/oranges', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/oranges-navel/', chart: 'WNZOpEoBKRyz4hBh-7TpdsnLsO7407KkQ' },
        { id: 21, name: 'Parsnips', reo_name: 'Tāmore mā', average_price: 3.70, nz_grown: true, last_month: 8, first_month: 5, details: 'Largely grown in the Manawatu, Waikato and Auckland regions.', image: '/parsnips', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/parsnip/', chart: 'WNZOpEoBKRyz4hBh-Se2inHBnTmBQfyt5' },
        { id: 22, name: 'Pears', reo_name: 'Pea', average_price: 3.70, nz_grown: true, last_month: 7, first_month: 3, details: 'The main varieties of pears grown in New Zealand are Beurre Bosc, Taylors Gold, Doyenne du Comice and Packham’s Triumph. Largely grown in the Hawkes bay and Nelson regions.', image: '/pears', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/pears/', chart: 'WNZOpEoBKRyz4hBh-WRSSzx3yltrIHdXb' },
        { id: 23, name: 'Pineapple', reo_name: 'Paināporo', average_price: 3.29, nz_grown: false, details: 'The majority of pineapples are imported to New Zealand.', image: '/pineapple', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/pineapple/', chart: 'WNZOpEoBKRyz4hBh-k2DwUfVh9lrAjMKz' },
        { id: 24, name: 'Potatoes', reo_name: 'Rīwai', average_price: 1.69, nz_grown: true, last_month: 9, first_month: 5, details: 'Largely grown in the Canterbury, Auckland, Waikato and Manawatu-Wanganui regions.', image: '/potatoes', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/potatoes/', chart: 'WNZOpEoBKRyz4hBh-ke17xHkve98VAlzi' },
        { id: 25, name: 'Pumpkin', reo_name: 'Paukena', average_price: 2.53, nz_grown: true, last_month: 9, first_month: 3, details: 'Largely grown in the Hawkes Bay, Auckland, Canterbury and Otago regions.', image: '/pumpkin', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/pumpkin/', chart: 'WNZOpEoBKRyz4hBh-vApLRKJ9JnAApVmt' },
        { id: 26, name: 'Tomatoes', reo_name: 'Tōmato', average_price: 6.03, nz_grown: true, last_month: 4, first_month: 11, details: 'Largely grown in the Auckland, Waikato and Tasman-Nelson regions.', image: '/tomatoes', info_link: 'https://www.5aday.co.nz/facts-and-tips/fruit-vegetable-info/tomatoes/', chart: 'WNZOpEoBKRyz4hBh-D6MActoilpLveWfS' }
      ])
        .then(() =>
          knex('prices').insert([
            {
              month: 1,
              food_id: 2,
              price: 7.86
            },
            {
              month: 1,
              food_id: 3,
              price: 2.77
            },
            {
              month: 1,
              food_id: 4,
              price: 11.02
            },
            {
              month: 1,
              food_id: 5,
              price: 5.14
            },
            {
              month: 1,
              food_id: 6,
              price: 1.53
            },
            {
              month: 1,
              food_id: 7,
              price: 10.75
            },
            {
              month: 1,
              food_id: 9,
              price: 3.24
            },
            {
              month: 1,
              food_id: 13,
              price: 8.64
            },
            {
              month: 1,
              food_id: 15,
              price: 6.05
            },
            {
              month: 1,
              food_id: 16,
              price: 2.78
            },
            {
              month: 1,
              food_id: 18,
              price: 10.78
            },
            {
              month: 1,
              food_id: 23,
              price: 3.44
            },
            {
              month: 1,
              food_id: 26,
              price: 3.45
            },
            {
              month: 2,
              food_id: 2,
              price: 8.26
            },
            {
              month: 2,
              food_id: 3,
              price: 2.81
            },
            {
              month: 2,
              food_id: 4,
              price: 10.13
            },
            {
              month: 2,
              food_id: 5,
              price: 5.04
            },
            {
              month: 2,
              food_id: 6,
              price: 1.66
            },
            {
              month: 2,
              food_id: 7,
              price: 10.68
            },
            {
              month: 2,
              food_id: 9,
              price: 3.35
            },
            {
              month: 2,
              food_id: 11,
              price: 5.19
            },
            {
              month: 2,
              food_id: 12,
              price: 4.72
            },
            {
              month: 2,
              food_id: 13,
              price: 8.04
            },
            {
              month: 2,
              food_id: 15,
              price: 6.04
            },
            {
              month: 2,
              food_id: 16,
              price: 3.12
            },
            {
              month: 2,
              food_id: 18,
              price: 10.78
            },
            {
              month: 2,
              food_id: 23,
              price: 3.42
            },
            {
              month: 2,
              food_id: 26,
              price: 3.6
            },
            {
              month: 3,
              food_id: 1,
              price: 2.41
            },
            {
              month: 3,
              food_id: 2,
              price: 10.39
            },
            {
              month: 3,
              food_id: 3,
              price: 2.83
            },
            {
              month: 3,
              food_id: 4,
              price: 10.7
            },
            {
              month: 3,
              food_id: 5,
              price: 5.35
            },
            {
              month: 3,
              food_id: 6,
              price: 1.96
            },
            {
              month: 3,
              food_id: 7,
              price: 10.39
            },
            {
              month: 3,
              food_id: 9,
              price: 3.72
            },
            {
              month: 3,
              food_id: 10,
              price: 2.81
            },
            {
              month: 3,
              food_id: 11,
              price: 6.11
            },
            {
              month: 3,
              food_id: 12,
              price: 5.07
            },
            {
              month: 3,
              food_id: 13,
              price: 6.64
            },
            {
              month: 3,
              food_id: 15,
              price: 5.04
            },
            {
              month: 3,
              food_id: 16,
              price: 3.56
            },
            {
              month: 3,
              food_id: 18,
              price: 10.78
            },
            {
              month: 3,
              food_id: 22,
              price: 3.25
            },
            {
              month: 3,
              food_id: 23,
              price: 3.31
            },
            {
              month: 3,
              food_id: 25,
              price: 2.46
            },
            {
              month: 3,
              food_id: 26,
              price: 4.3
            },
            {
              month: 4,
              food_id: 1,
              price: 2.31
            },
            {
              month: 4,
              food_id: 3,
              price: 2.76
            },
            {
              month: 4,
              food_id: 4,
              price: 11.51
            },
            {
              month: 4,
              food_id: 5,
              price: 5.12
            },
            {
              month: 4,
              food_id: 6,
              price: 1.94
            },
            {
              month: 4,
              food_id: 7,
              price: 10.73
            },
            {
              month: 4,
              food_id: 8,
              price: 2.06
            },
            {
              month: 4,
              food_id: 9,
              price: 3.2
            },
            {
              month: 4,
              food_id: 10,
              price: 2.59
            },
            {
              month: 4,
              food_id: 11,
              price: 6.18
            },
            {
              month: 4,
              food_id: 12,
              price: 5.88
            },
            {
              month: 4,
              food_id: 13,
              price: 6.16
            },
            {
              month: 4,
              food_id: 15,
              price: 4.93
            },
            {
              month: 4,
              food_id: 16,
              price: 3.56
            },
            {
              month: 4,
              food_id: 18,
              price: 10.86
            },
            {
              month: 4,
              food_id: 22,
              price: 2.96
            },
            {
              month: 4,
              food_id: 23,
              price: 3.26
            },
            {
              month: 4,
              food_id: 25,
              price: 2.18
            },
            {
              month: 4,
              food_id: 26,
              price: 5.24
            },
            {
              month: 5,
              food_id: 1,
              price: 2.24
            },
            {
              month: 5,
              food_id: 3,
              price: 2.66
            },
            {
              month: 5,
              food_id: 5,
              price: 5.23
            },
            {
              month: 5,
              food_id: 6,
              price: 1.77
            },
            {
              month: 5,
              food_id: 8,
              price: 1.97
            },
            {
              month: 5,
              food_id: 9,
              price: 3.01
            },
            {
              month: 5,
              food_id: 10,
              price: 2.63
            },
            {
              month: 5,
              food_id: 11,
              price: 7.99
            },
            {
              month: 5,
              food_id: 13,
              price: 6.34
            },
            {
              month: 5,
              food_id: 14,
              price: 2.44
            },
            {
              month: 5,
              food_id: 15,
              price: 5.03
            },
            {
              month: 5,
              food_id: 17,
              price: 4.52
            },
            {
              month: 5,
              food_id: 18,
              price: 10.93
            },
            {
              month: 5,
              food_id: 19,
              price: 1.99
            },
            {
              month: 5,
              food_id: 21,
              price: 5.49
            },
            {
              month: 5,
              food_id: 22,
              price: 3.08
            },
            {
              month: 5,
              food_id: 23,
              price: 3.16
            },
            {
              month: 5,
              food_id: 24,
              price: 1.64
            },
            {
              month: 5,
              food_id: 25,
              price: 2.03
            },
            {
              month: 6,
              food_id: 1,
              price: 2.29
            },
            {
              month: 6,
              food_id: 3,
              price: 2.53
            },
            {
              month: 6,
              food_id: 5,
              price: 5.89
            },
            {
              month: 6,
              food_id: 6,
              price: 1.76
            },
            {
              month: 6,
              food_id: 8,
              price: 1.87
            },
            {
              month: 6,
              food_id: 9,
              price: 3.44
            },
            {
              month: 6,
              food_id: 10,
              price: 2.75
            },
            {
              month: 6,
              food_id: 13,
              price: 6.5
            },
            {
              month: 6,
              food_id: 14,
              price: 2.04
            },
            {
              month: 6,
              food_id: 15,
              price: 5.07
            },
            {
              month: 6,
              food_id: 17,
              price: 4
            },
            {
              month: 6,
              food_id: 18,
              price: 10.89
            },
            {
              month: 6,
              food_id: 19,
              price: 1.93
            },
            {
              month: 6,
              food_id: 21,
              price: 5.27
            },
            {
              month: 6,
              food_id: 22,
              price: 3.27
            },
            {
              month: 6,
              food_id: 23,
              price: 3.12
            },
            {
              month: 6,
              food_id: 24,
              price: 1.57
            },
            {
              month: 6,
              food_id: 25,
              price: 1.94
            },
            {
              month: 7,
              food_id: 1,
              price: 2.43
            },
            {
              month: 7,
              food_id: 2,
              price: 11.1
            },
            {
              month: 7,
              food_id: 3,
              price: 2.55
            },
            {
              month: 7,
              food_id: 5,
              price: 7.11
            },
            {
              month: 7,
              food_id: 6,
              price: 2.11
            },
            {
              month: 7,
              food_id: 8,
              price: 1.86
            },
            {
              month: 7,
              food_id: 9,
              price: 3.28
            },
            {
              month: 7,
              food_id: 10,
              price: 3.19
            },
            {
              month: 7,
              food_id: 13,
              price: 7.66
            },
            {
              month: 7,
              food_id: 14,
              price: 2.03
            },
            {
              month: 7,
              food_id: 15,
              price: 5.09
            },
            {
              month: 7,
              food_id: 17,
              price: 4.62
            },
            {
              month: 7,
              food_id: 18,
              price: 10.81
            },
            {
              month: 7,
              food_id: 19,
              price: 1.89
            },
            {
              month: 7,
              food_id: 21,
              price: 5.25
            },
            {
              month: 7,
              food_id: 22,
              price: 3.43
            },
            {
              month: 7,
              food_id: 23,
              price: 3.19
            },
            {
              month: 7,
              food_id: 24,
              price: 1.54
            },
            {
              month: 7,
              food_id: 25,
              price: 1.95
            },
            {
              month: 8,
              food_id: 1,
              price: 2.5
            },
            {
              month: 8,
              food_id: 2,
              price: 9.08
            },
            {
              month: 8,
              food_id: 3,
              price: 2.65
            },
            {
              month: 8,
              food_id: 5,
              price: 6.5
            },
            {
              month: 8,
              food_id: 6,
              price: 2.41
            },
            {
              month: 8,
              food_id: 8,
              price: 1.87
            },
            {
              month: 8,
              food_id: 9,
              price: 3.36
            },
            {
              month: 8,
              food_id: 13,
              price: 8.05
            },
            {
              month: 8,
              food_id: 14,
              price: 2.2
            },
            {
              month: 8,
              food_id: 15,
              price: 5.01
            },
            {
              month: 8,
              food_id: 17,
              price: 4.97
            },
            {
              month: 8,
              food_id: 18,
              price: 10.89
            },
            {
              month: 8,
              food_id: 19,
              price: 1.93
            },
            {
              month: 8,
              food_id: 20,
              price: 2.71
            },
            {
              month: 8,
              food_id: 21,
              price: 5.3
            },
            {
              month: 8,
              food_id: 23,
              price: 3.29
            },
            {
              month: 8,
              food_id: 24,
              price: 1.54
            },
            {
              month: 8,
              food_id: 25,
              price: 2
            },
            {
              month: 9,
              food_id: 1,
              price: 2.62
            },
            {
              month: 9,
              food_id: 3,
              price: 2.72
            },
            {
              month: 9,
              food_id: 2,
              price: 8.59
            },
            {
              month: 9,
              food_id: 5,
              price: 7.17
            },
            {
              month: 9,
              food_id: 6,
              price: 2.09
            },
            {
              month: 9,
              food_id: 8,
              price: 1.89
            },
            {
              month: 9,
              food_id: 9,
              price: 3.79
            },
            {
              month: 9,
              food_id: 13,
              price: 7.22
            },
            {
              month: 9,
              food_id: 14,
              price: 2.39
            },
            {
              month: 9,
              food_id: 15,
              price: 5.12
            },
            {
              month: 9,
              food_id: 17,
              price: 4.91
            },
            {
              month: 9,
              food_id: 18,
              price: 10.83
            },
            {
              month: 9,
              food_id: 19,
              price: 1.94
            },
            {
              month: 9,
              food_id: 20,
              price: 2.65
            },
            {
              month: 9,
              food_id: 23,
              price: 3.35
            },
            {
              month: 9,
              food_id: 24,
              price: 1.54
            },
            {
              month: 9,
              food_id: 25,
              price: 2.26
            },
            {
              month: 10,
              food_id: 3,
              price: 2.72
            },
            {
              month: 10,
              food_id: 2,
              price: 7.66
            },
            {
              month: 10,
              food_id: 5,
              price: 7.23
            },
            {
              month: 10,
              food_id: 6,
              price: 2.19
            },
            {
              month: 10,
              food_id: 7,
              price: 11.17
            },
            {
              month: 10,
              food_id: 9,
              price: 3.7
            },
            {
              month: 10,
              food_id: 12,
              price: 6.37
            },
            {
              month: 10,
              food_id: 13,
              price: 7.08
            },
            {
              month: 10,
              food_id: 14,
              price: 2.63
            },
            {
              month: 10,
              food_id: 15,
              price: 5.18
            },
            {
              month: 10,
              food_id: 16,
              price: 3.43
            },
            {
              month: 10,
              food_id: 17,
              price: 4.8
            },
            {
              month: 10,
              food_id: 18,
              price: 10.72
            },
            {
              month: 10,
              food_id: 20,
              price: 2.81
            },
            {
              month: 10,
              food_id: 23,
              price: 3.32
            },
            {
              month: 11,
              food_id: 3,
              price: 2.76
            },
            {
              month: 11,
              food_id: 2,
              price: 7.16
            },
            {
              month: 11,
              food_id: 5,
              price: 5.02
            },
            {
              month: 11,
              food_id: 6,
              price: 2.16
            },
            {
              month: 11,
              food_id: 7,
              price: 10.55
            },
            {
              month: 11,
              food_id: 9,
              price: 3.24
            },
            {
              month: 11,
              food_id: 11,
              price: 6.42
            },
            {
              month: 11,
              food_id: 12,
              price: 5.13
            },
            {
              month: 11,
              food_id: 13,
              price: 7.35
            },
            {
              month: 11,
              food_id: 14,
              price: 3.39
            },
            {
              month: 11,
              food_id: 15,
              price: 5.38
            },
            {
              month: 11,
              food_id: 16,
              price: 2.75
            },
            {
              month: 11,
              food_id: 17,
              price: 4.83
            },
            {
              month: 11,
              food_id: 18,
              price: 10.57
            },
            {
              month: 11,
              food_id: 20,
              price: 3.09
            },
            {
              month: 11,
              food_id: 23,
              price: 3.31
            },
            {
              month: 11,
              food_id: 26,
              price: 4.08
            },
            {
              month: 12,
              food_id: 3,
              price: 2.78
            },
            {
              month: 12,
              food_id: 2,
              price: 7.09
            },
            {
              month: 12,
              food_id: 5,
              price: 4.04
            },
            {
              month: 12,
              food_id: 6,
              price: 1.67
            },
            {
              month: 12,
              food_id: 7,
              price: 9.95
            },
            {
              month: 12,
              food_id: 9,
              price: 2.94
            },
            {
              month: 12,
              food_id: 11,
              price: 6.08
            },
            {
              month: 12,
              food_id: 12,
              price: 4.44
            },
            {
              month: 12,
              food_id: 13,
              price: 7.81
            },
            {
              month: 12,
              food_id: 15,
              price: 5.58
            },
            {
              month: 12,
              food_id: 16,
              price: 2.42
            },
            {
              month: 12,
              food_id: 18,
              price: 10.53
            },
            {
              month: 12,
              food_id: 23,
              price: 3.28
            },
            {
              month: 12,
              food_id: 26,
              price: 3.27
            }
          ])
        ))
