module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Pastelaria do Rodizio Amaldicoado',
          address: 'Travessa da Judia, 511',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Bahia Show',
          address: 'Rua Rebuzzi, 451',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cozinha Master',
          address: 'Rua Belo Horizonte, 265',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Delicia Light',
          address: 'Rua dos Pegas, 162',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tapioca da Mistura',
          address: 'Avenida Padre Antônio José dos Santos, 185',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
