module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert('products', [
      {
        restaurant_id: 1,
        name: 'Chopp',
        price: '10,00',
        category: 'Doces',
        description: 'Chopp pela metade do preço',
        day_week: ['Sábado', 'Domingo'],
        promotion_schedules: ['11:30', '14:00'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        name: 'Empadão',
        price: '4,50',
        category: 'Salgado',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 2,
        name: 'Marmitex',
        price: '10,00',
        category: 'Outros',
        description: 'Marmitex pela metade do preço',
        day_week: ['Segunda', 'Quarta', 'Sexta'],
        promotion_schedules: ['11:00', '14:30'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 2,
        name: 'Suco de laranja',
        price: '2,00',
        category: 'Suco',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 3,
        name: 'Biffet livre',
        price: '15,00',
        category: 'Outros',
        description: 'Todas as Quartas 40% off',
        day_week: ['Quarta'],
        promotion_schedules: ['11:00', '14:30'],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: () => {},
};
