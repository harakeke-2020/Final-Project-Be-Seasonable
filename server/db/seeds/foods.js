exports.seed = (knex) =>
  knex('prices').del()
    .then(() => knex('foods').del())
    .then(() =>
      knex('foods').insert([
        { id: 1, name: 'Apples', reo_name: 'Āporo', average_price: 2.80, nz_grown: true, last_month: 9, first_month: 3 },
        { id: 2, name: 'Avocados', reo_name: 'Awakato', average_price: 9.71, nz_grown: true, last_month: 3, first_month: 7 },
        { id: 3, name: 'Bananas', reo_name: 'Panana', average_price: 2.71, nz_grown: false },
        { id: 4, name: 'Beans', reo_name: 'Pīni', average_price: 12.61, nz_grown: true, last_month: 4, first_month: 1 },
        { id: 5, name: 'Broccoli', reo_name: 'Porokori', average_price: 5.76, nz_grown: true },
        { id: 6, name: 'Cabbage', reo_name: 'Kāpeti', average_price: 1.94, nz_grown: true },
        { id: 7, name: 'Capsicum', reo_name: 'Rapikama', average_price: 12.33, nz_grown: true, last_month: 4, first_month: 10 },
        { id: 8, name: 'Carrots', reo_name: 'Kāroti', average_price: 2.10, nz_grown: true, last_month: 9, first_month: 4 },
        { id: 9, name: 'Cauliflower', reo_name: 'Kareparāoa', average_price: 3.36, nz_grown: true },
        { id: 10, name: 'Celery', reo_name: 'Herewī', average_price: 3.31, nz_grown: true, last_month: 7, first_month: 3 },
        { id: 11, name: 'Courgette', reo_name: 'Roroa iti', average_price: 8.34, nz_grown: true, last_month: 5, first_month: 11 },
        { id: 12, name: 'Cucumber', reo_name: 'Kūkama', average_price: 7.43, nz_grown: true, last_month: 4, first_month: 10 },
        { id: 13, name: 'Grapes', reo_name: 'Kerepi', average_price: 7.30, nz_grown: false },
        { id: 14, name: 'Kiwifruit', reo_name: 'Huakiwi', average_price: 3.58, nz_grown: true, last_month: 11, first_month: 5 },
        { id: 15, reo_name: 'Kūmara', average_price: 5.29, nz_grown: true },
        { id: 16, name: 'Lettuce', reo_name: 'Rētihi', average_price: 4.30, nz_grown: true, last_month: 4, first_month: 10 },
        { id: 17, name: 'Mandarins', reo_name: 'Manarini', average_price: 5.22, nz_grown: true, last_month: 11, first_month: 5 },
        { id: 18, name: 'Mushrooms', reo_name: 'Harore', average_price: 10.57, nz_grown: true },
        { id: 19, name: 'Onions', reo_name: 'Riki', average_price: 2.07, nz_grown: true, last_month: 9, first_month: 5 },
        { id: 20, name: 'Oranges', reo_name: 'Ārani', average_price: 3.29, nz_grown: true, last_month: 11, first_month: 8 },
        { id: 21, name: 'Parsnips', reo_name: 'Tāmore mā', average_price: 3.70, nz_grown: true, last_month: 8, first_month: 5 },
        { id: 22, name: 'Pears', reo_name: 'Pea', average_price: 3.70, nz_grown: true, last_month: 7, first_month: 3 },
        { id: 23, name: 'Pineapple', reo_name: 'Paināporo', average_price: 3.29, nz_grown: false },
        { id: 24, name: 'Potatoes', reo_name: 'Rīwai', average_price: 1.69, nz_grown: true, last_month: 9, first_month: 5 },
        { id: 25, name: 'Pumpkin', reo_name: 'Paukena', average_price: 2.53, nz_grown: true, last_month: 9, first_month: 3 },
        { id: 26, name: 'Tomatoes', reo_name: 'Tōmato', average_price: 6.03, nz_grown: true, last_month: 4, first_month: 11 }
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
