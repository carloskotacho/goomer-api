module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert('products', [
      {
        restaurant_id: 1,
        name: 'Chopp',
        price: '10',
        category: 'Doces',
        promotional_price: '5',
        promotion_schedules:
          'Pela metade do preço! (SEGUNDA, QUARTA, SEXTA das 11:00h as 14:00)',
        promotion_start_time: '11:00',
        promotion_end_time: '12:00',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        name: 'Empadão',
        price: '4.50',
        category: 'Salgado',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 2,
        name: 'Marmitex',
        price: '10',
        category: 'Outros',
        promotional_price: '5',
        promotion_schedules:
          'Pela metade do preço! (SEGUNDA, QUARTA, SEXTA das 11:00h as 14:00)',
        promotion_start_time: '11:00',
        promotion_end_time: '12:00',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 2,
        name: 'Suco de laranja',
        price: '2',
        category: 'Suco',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 3,
        name: 'Biffet livre',
        price: '15',
        category: 'Outros',
        promotional_price: '5',
        promotion_schedules:
          'Pela metade do preço! (SEGUNDA, QUARTA, SEXTA das 11:00h as 14:00)',
        promotion_start_time: '11:00',
        promotion_end_time: '12:00',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: () => {},
};
