exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pitchers').del(),

    // Inserts seed entries
    knex('pitchers').insert(
      {
        category: 'vintage',
        alias: '',
        firstName: 'Bob',
        lastName: 'Feller',
        IP: 247,
        Hits: 211,
        2B: 31,
        3B: 11,
        HR: 14,
        BB: 114,
        SO: 167,
        HBP: 4,
        BK: 1,
        WP: 4,
        BF: 1044
      }),
    knex('pitchers').insert(
      {
        category: 'vintage',
        alias: '',
        firstName: 'Sandy',
        lastName: 'Koufax',
        IP: 222,
        Hits: 168,
        2B: 24,
        3B: 9,
        HR: 20,
        BB: 78,
        SO: 229,
        HBP: 2,
        BK: 1,
        WP: 9,
        BF: 908
      }),
    knex('pitchers').insert(
      {
        category: 'vintage',
        alias: '',
        firstName: 'Satchel',
        lastName: 'Paige',
        IP: 158,
        Hits: 142,
        2B: 21,
        3B: 7,
        HR: 10,
        BB: 60,
        SO: 96,
        HBP: 2,
        BK: 2,
        WP: 2,
        BF: 664
      }),
    knex('pitchers').insert(
      {
        category: 'classic',
        alias: '',
        firstName: 'Tom',
        lastName: 'Seaver',
        IP: 250,
        Hits: 207,
        2B: 33,
        3B: 6,
        HR: 20,
        BB: 73,
        SO: 190,
        HBP: 4,
        BK: 0,
        WP: 7,
        BF: 1011
      }),
    knex('pitchers').insert(
      {
        category: 'classic',
        alias: '',
        firstName: 'Tom',
        lastName: 'Glavine',
        IP: 220,
        Hits: 214,
        2B: 34,
        3B: 6,
        HR: 18,
        BB: 75,
        SO: 130,
        HBP: 3,
        BK: 0,
        WP: 3,
        BF: 927
      }),
    knex('pitchers').insert(
      {
        category: 'classic',
        alias: '',
        firstName: 'Nolan',
        lastName: 'Ryan',
        IP: 232,
        Hits: 169,
        2B: 27,
        3B: 5,
        HR: 14,
        BB: 120,
        SO: 246,
        HBP: 7,
        BK: 1,
        WP: 12,
        BF: 972
      }),
    knex('pitchers').insert(
      {
        category: 'modern',
        alias: '',
        firstName: 'Edinson',
        lastName: 'Volquez',
        IP: 191,
        Hits: 182,
        2B: 34,
        3B: 4,
        HR: 19,
        BB: 91,
        SO: 167,
        HBP: 10,
        BK: 1,
        WP: 10,
        BF: 836
      }),
    knex('pitchers').insert(
      {
        category: 'modern',
        alias: '',
        firstName: 'Clayton',
        lastName: 'Kershaw',
        IP: 225,
        Hits: 168,
        2B: 31,
        3B: 3,
        HR: 14,
        BB: 65,
        SO: 244,
        HBP: 4,
        BK: 2,
        WP: 9,
        BF: 893
      }),
    knex('pitchers').insert(
      {
        category: 'modern',
        alias: '',
        firstName: 'Noah',
        lastName: 'Syndergaard',
        IP: 213,
        Hits: 179,
        2B: 33,
        3B: 3,
        HR: 27,
        BB: 44,
        SO: 235,
        HBP: 4,
        BK: 0,
        WP: 9,
        BF: 854
      })
};
