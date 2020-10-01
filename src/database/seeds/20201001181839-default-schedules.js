module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'schedules',
      [
        {
          restaurant_id: 1,
          day_week: 'Segunda - Feira',
          open_hours: '08:00',
          closed_hours: '18:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
