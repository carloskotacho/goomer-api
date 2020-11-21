module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Pastelaria do Rodizio Amaldicoado',
          address: 'Travessa da Judia, 511',
          week_opening_time: '11:00',
          week_closing_time: '14:00',
          weekend_opening_time: '19:00',
          weekend_closing_time: '23:00',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Bahia Show',
          address: 'Rua Rebuzzi, 451',
          week_opening_time: '11:00',
          week_closing_time: '14:00',
          weekend_opening_time: '19:00',
          weekend_closing_time: '23:00',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cozinha Master',
          address: 'Rua Belo Horizonte, 265',
          week_opening_time: '11:00',
          week_closing_time: '14:00',
          weekend_opening_time: '19:00',
          weekend_closing_time: '23:00',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Delicia Light',
          address: 'Rua dos Pegas, 162',
          week_opening_time: '11:00',
          week_closing_time: '14:00',
          weekend_opening_time: '19:00',
          weekend_closing_time: '23:00',
          schedules:
            'De Segunda à Sexta das 11:00h as 14:00h e de Sábado à Domingo das 19:00h as 23:00h',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tapioca da Mistura',
          address: 'Avenida Padre Antônio José dos Santos, 185',
          week_opening_time: '11:00',
          week_closing_time: '14:00',
          weekend_opening_time: '19:00',
          weekend_closing_time: '23:00',
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
