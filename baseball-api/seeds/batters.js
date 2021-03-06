exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('batters').del(),

    // Inserts seed entries
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'babe',
        "lastName": 'ruth',
        "AB": 381.8,
        "R": 98.8,
        "H": 130.6,
        "2B": 23,
        "3B": 6.2,
        "HR": 32.5,
        "RBI": 100.6,
        "BB": 93.5,
        "SO": 60.5,
        "SB": 5.6,
        "CS": 5.3
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'willie',
        "lastName": 'mays',
        "AB": 494.6,
        "R": 93.7,
        "H": 149.2,
        "2B": 23.8,
        "3B": 6.4,
        "HR": 30,
        "RBI": 86.5,
        "BB": 66.5,
        "SO": 69.4,
        "SB": 15.4,
        "CS": 4.7
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'stan',
        "lastName": 'musial',
        "AB": 498.7,
        "R": 88.6,
        "H": 165,
        "2B": 33,
        "3B": 8,
        "HR": 21.6,
        "RBI": 88.7,
        "BB": 72.7,
        "SO": 31.6,
        "SB": 3.5,
        "CS": 1.4
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'lou',
        "lastName": 'gehrig',
        "AB": 470.6,
        "R": 111.1,
        "H": 160.1,
        "2B": 31.4,
        "3B": 9.6,
        "HR": 29.0,
        "RBI": 117.4,
        "BB": 88.7,
        "SO": 46.5,
        "SB": 6,
        "CS": 5.9
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'joe',
        "lastName": 'dimaggio',
        "AB": 524.7,
        "R": 106.9,
        "H": 170.3,
        "2B": 29.9,
        "3B": 10.1,
        "HR": 27.8,
        "RBI": 118.2,
        "BB": 60.8,
        "SO": 28.4,
        "SB": 2.3,
        "CS": 0.7
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'ty',
        "lastName": 'cobb',
        "AB": 476.4,
        "R": 93.6,
        "H": 174.5,
        "2B": 30.2,
        "3B": 12.3,
        "HR": 4.9,
        "RBI": 80.7,
        "BB": 52,
        "SO": 14.9,
        "SB": 37.2,
        "CS": 7.4
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'ted',
        "lastName": 'williams',
        "AB": 405.6,
        "R": 94.6,
        "H": 139.7,
        "2B": 27.6,
        "3B": 3.7,
        "HR": 27.4,
        "RBI": 96.8,
        "BB": 106.3,
        "SO": 37.3,
        "SB": 1.3,
        "CS": 0.9
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'mickey',
        "lastName": 'mantle',
        "AB": 450.1,
        "R": 93.2,
        "H": 134.2,
        "2B": 19.1,
        "3B": 4,
        "HR": 29.8,
        "RBI": 83.8,
        "BB": 96.3,
        "SO": 95,
        "SB": 8.5,
        "CS": 2.1
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'jackie',
        "lastName": 'robinson',
        "AB": 487.7,
        "R": 94.7,
        "H": 151.8,
        "2B": 27.3,
        "3B": 5.4,
        "HR": 13.7,
        "RBI": 73.4,
        "BB": 74,
        "SO": 29.1,
        "SB": 19.7,
        "CS": 3
      }),
    knex('batters').insert(
      {
        "category": 'vintage',
        "alias": '',
        "firstName": 'honus',
        "lastName": 'wagner',
        "AB": 496.7,
        "R": 82.7,
        "H": 163.3,
        "2B": 30.5,
        "3B": 12,
        "HR": 4.8,
        "RBI": 82.5,
        "BB": 45.9,
        "SO": 15.6,
        "SB": 34.4,
        "CS": 0.7
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'barry',
        "lastName": 'bonds',
        "AB": 447,
        "R": 101.2,
        "H": 133.4,
        "2B": 27.3,
        "3B": 3.5,
        "HR": 34.6,
        "RBI": 90.7,
        "BB": 116.3,
        "SO": 70,
        "SB": 23.4,
        "CS": 6.4
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'ken',
        "lastName": 'griffey jr',
        "AB": 445.5,
        "R": 75.5,
        "H": 126.4,
        "2B": 23.8,
        "3B": 1.7,
        "HR": 28.6,
        "RBI": 83.5,
        "BB": 59.6,
        "SO": 80.9,
        "SB": 8.4,
        "CS": 3.1
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'pete',
        "lastName": 'rose',
        "AB": 585.5,
        "R": 90.2,
        "H": 177.3,
        "2B": 31.1,
        "3B": 5.6,
        "HR": 6.7,
        "RBI": 54.8,
        "BB": 65.3,
        "SO": 47.6,
        "SB": 8.3,
        "CS": 6.2
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'carl',
        "lastName": 'yastrzemski',
        "AB": 521.2,
        "R": 79,
        "H": 148.7,
        "2B": 28.1,
        "3B": 2.6,
        "HR": 19.7,
        "RBI": 80.2,
        "BB": 80.2,
        "SO": 60.6,
        "SB": 7.3,
        "CS": 5
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'tony',
        "lastName": 'gwynn',
        "AB": 464.4,
        "R": 69.2,
        "H": 157.1,
        "2B": 27.2,
        "3B": 4.3,
        "HR": 6.8,
        "RBI": 56.9,
        "BB": 39.5,
        "SO": 21.7,
        "SB": 16,
        "CS": 6.3
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'reggie',
        "lastName": 'jackson',
        "AB": 469.7,
        "R": 73.9,
        "H": 123,
        "2B": 22,
        "3B": 2.3,
        "HR": 26.8,
        "RBI": 81,
        "BB": 65.5,
        "SO": 123.7,
        "SB": 10.9,
        "CS": 5.5
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'hank',
        "lastName": 'aaron',
        "AB": 537.6,
        "R": 94.5,
        "H": 164,
        "2B": 27.1,
        "3B": 4.3,
        "HR": 32.8,
        "RBI": 99.9,
        "BB": 61,
        "SO": 60,
        "SB": 10.4,
        "CS": 3.2
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'ricky',
        "lastName": 'henderson',
        "AB": 438.4,
        "R": 91.8,
        "H": 122.2,
        "2B": 20.4,
        "3B": 2.6,
        "HR": 11.9,
        "RBI": 44.6,
        "BB": 87.6,
        "SO": 67.8,
        "SB": 56.2,
        "CS": 13.4
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'ozzie',
        "lastName": 'smith',
        "AB": 494.5,
        "R": 66.2,
        "H": 129.5,
        "2B": 21.2,
        "3B": 3.6,
        "HR": 1.5,
        "RBI": 41.7,
        "BB": 56.4,
        "SO": 31,
        "SB": 30.5,
        "CS": 7.8
      }),
    knex('batters').insert(
      {
        "category": 'classic',
        "alias": '',
        "firstName": 'mark',
        "lastName": 'mcgwire',
        "AB": 386.7,
        "R": 72.9,
        "H": 101.6,
        "2B": 15.8,
        "3B": 0.4,
        "HR": 36.4,
        "RBI": 88.4,
        "BB": 82.3,
        "SO": 99.8,
        "SB": 0.8,
        "CS": 0.5
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'bryce',
        "lastName": 'harper',
        "AB": 457.5,
        "R": 82,
        "H": 132,
        "2B": 24.5,
        "3B": 3.8,
        "HR": 24.3,
        "RBI": 62,
        "BB": 69.8,
        "SO": 112.3,
        "SB": 9.3,
        "CS": 4
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'joey',
        "lastName": 'votto',
        "AB": 438.3,
        "R": 72.9,
        "H": 136.2,
        "2B": 30.7,
        "3B": 1.6,
        "HR": 21.3,
        "RBI": 70.3,
        "BB": 83.8,
        "SO": 98.2,
        "SB": 6.6,
        "CS": 3
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'mike',
        "lastName": 'trout',
        "AB": 489.6,
        "R": 95.4,
        "H": 148.8,
        "2B": 28.6,
        "3B": 6.4,
        "HR": 27.8,
        "RBI": 79.4,
        "BB": 72.2,
        "SO": 129.4,
        "SB": 22.6,
        "CS": 4.2
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'eric',
        "lastName": 'hosmer',
        "AB": 556.6,
        "R": 73.8,
        "H": 155.8,
        "2B": 30.2,
        "3B": 2.8,
        "HR": 15.4,
        "RBI": 73.6,
        "BB": 47.4,
        "SO": 95.6,
        "SB": 9.8,
        "CS": 3
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'miguel',
        "lastName": 'cabrera',
        "AB": 558.3,
        "R": 94.5,
        "H": 179.3,
        "2B": 37.8,
        "3B": 1.2,
        "HR": 31.4,
        "RBI": 111.2,
        "BB": 72,
        "SO": 107.7,
        "SB": 2.9,
        "CS": 1.5
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'derek',
        "lastName": 'jeter',
        "AB": 558.8,
        "R": 96.2,
        "H": 173.3,
        "2B": 27.2,
        "3B": 3.3,
        "HR": 13,
        "RBI": 65.6,
        "BB": 54.1,
        "SO": 92,
        "SB": 17.9,
        "CS": 4.9
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'ichiro',
        "lastName": 'suzuki',
        "AB": 624.1,
        "R": 89.9,
        "H": 195.7,
        "2B": 22.7,
        "3B": 6.1,
        "HR": 7.5,
        "RBI": 49.2,
        "BB": 39.7,
        "SO": 66.3,
        "SB": 33.2,
        "CS": 7.6
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'prince',
        "lastName": 'fielder',
        "AB": 499.5,
        "R": 75.7,
        "H": 143.3,
        "2B": 27.7,
        "3B": 0.9,
        "HR": 28.3,
        "RBI": 89.5,
        "BB": 74.1,
        "SO": 99.3,
        "SB": 1.6,
        "CS": 1
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'jimmy',
        "lastName": 'rollins',
        "AB": 571.6,
        "R": 87.3,
        "H": 151.4,
        "2B": 31.4,
        "3B": 7.1,
        "HR": 14.3,
        "RBI": 58,
        "BB": 49.8,
        "SO": 76.9,
        "SB": 29.1,
        "CS": 6.4
      }),
    knex('batters').insert(
      {
        "category": 'modern',
        "alias": '',
        "firstName": 'david',
        "lastName": 'wright',
        "AB": 488.3,
        "R": 77.6,
        "H": 145.5,
        "2B": 31.8,
        "3B": 2.2,
        "HR": 19.6,
        "RBI": 79.7,
        "BB": 61.3,
        "SO": 103.1,
        "SB": 16.1,
        "CS": 5.3
      })
  );
};
