module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Pastelaria do Rodizio Amaldicoado',
          address: 'Travessa da Judia, 511',
          schedules: ['11:30', '14:00', '19:30', '23:00'],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Bahia Show',
          address: 'Rua Rebuzzi, 451',
          schedules: ['11:30', '14:00', '19:30', '23:00'],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cozinha Master',
          address: 'Rua Belo Horizonte, 265',
          schedules: ['11:30', '14:00', '19:30', '23:00'],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Delicia Light',
          address: 'Rua dos Pegas, 162',
          schedules: ['11:30', '14:00', '19:30', '23:00'],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tapioca da Mistura',
          address: 'Avenida Padre Antônio José dos Santos, 185',
          schedules: ['11:30', '14:00', '19:30', '23:00'],
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
