exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 234379448, make: 'jeep', model: 'wrangler', mileage: 5034 },
        { vin: 234379423, make: 'honda', model: 'civic', mileage: 2340, transmission: 'automatic', title: 'salvage' },
        { vin: 234379234, make: 'ferrari', model: '458', mileage: 103, transmission: 'manual', title: 'clean' },
      ]);
    });
};
