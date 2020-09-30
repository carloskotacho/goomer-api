module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'restaurants',
    [
      {
        name: 'Pastelaria do Rodizio Amaldicoado',
        address: 'Travessa da Judia, 511',
        opening_hours: 'De Segunda à Sexta das 09h as 18h e de Sabado à Domingo das 11h as 20h',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'A Bahia Show',
        address: 'Rua Rebuzzi, 451',
        opening_hours: 'De Segunda à Sexta das 18h as 23h',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cozinha Master',
        address: 'Rua Belo Horizonte, 265',
        opening_hours: 'De Segunda à Sabado das 11h as 14h',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Delicia Light',
        address: 'Rua dos Pegas, 162',
        opening_hours: 'De Segunda à Sexta das 09h as 18h e de Sabado à Domingo das 11h as 20h',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tapioca da Mistura',
        address: 'Avenida Padre Antônio José dos Santos, 185',
        opening_hours: 'De Segunda à Sexta das 09h as 18h',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
