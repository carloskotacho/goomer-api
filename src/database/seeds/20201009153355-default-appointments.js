module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'appointments',
      [
        {
          day_week: 'Segunda',
          start: '11:30:00',
          end: '14:00:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          day_week: 'Terça',
          start: '11:30:00',
          end: '14:00:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          day_week: 'Quarta',
          start: '11:30:00',
          end: '14:00:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          day_week: 'Quinta',
          start: '11:30:00',
          end: '14:00:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          day_week: 'Sexta',
          start: '11:30:00',
          end: '14:00:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          day_week: 'Sábado',
          start: '11:30:00',
          end: '14:00:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          day_week: 'Domingo',
          start: '19:30:00',
          end: '23:30:00',
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
