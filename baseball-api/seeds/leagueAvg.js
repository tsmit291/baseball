var leagueAvgs = [
  {
    "category": "vintage",
    "AB": 66497,
    "H": 17609,
    "2B": 2611,
    "3B": 978,
    "HR": 448,
    "SO": 5784,
    "BB": 5286
  },
  {
    "category": "classic",
    "AB": 99534,
    "H": 25847,
    "2B": 4212,
    "3B": 843,
    "HR": 2059,
    "SO": 13288,
    "BB": 973
  },
  {
    "category": "modern",
    "AB": 153485,
    "H": 40150,
    "2B": 7606,
    "3B": 897,
    "HR": 4286,
    "SO": 28313,
    "BB": 14722
  }
]

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('leagueAvg').del(),

    // Inserts seed entries
    knex('leagueAvg').insert(leagueAvgs)
  );
};
