module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Pastelaria do Rodizio Amaldicoado',
          address: 'Travessa da Judia, 511',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Bahia Show',
          address: 'Rua Rebuzzi, 451',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cozinha Master',
          address: 'Rua Belo Horizonte, 265',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Delicia Light',
          address: 'Rua dos Pegas, 162',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tapioca da Mistura',
          address: 'Avenida Padre Antônio José dos Santos, 185',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
