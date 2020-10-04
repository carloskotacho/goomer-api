module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'schedules',
      [
        {
          restaurant_id: 1,
          day_week: 'Segunda',
          open_hours: '08:00',
          closed_hours: '18:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          restaurant_id: 1,
          day_week: 'Terça',
          open_hours: '08:00',
          closed_hours: '18:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          restaurant_id: 1,
          day_week: 'Quarta',
          open_hours: '08:00',
          closed_hours: '18:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          restaurant_id: 1,
          day_week: 'Quinta',
          open_hours: '08:00',
          closed_hours: '18:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          restaurant_id: 1,
          day_week: 'Sexta',
          open_hours: '08:00',
          closed_hours: '18:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          restaurant_id: 1,
          day_week: 'Sábado',
          open_hours: '11:00',
          closed_hours: '20:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          restaurant_id: 1,
          day_week: 'Domingo',
          open_hours: '11:00',
          closed_hours: '20:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
