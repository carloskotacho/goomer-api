module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert('files', [
      // RESTAURANTS
      {
        name: 'restaurant_pastelaria_rodizio_amaldicoado',
        path:
          'https://avatars.dicebear.com/api/jdenticon/restaurant_pastelaria_rodizio_amaldicoado.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'restaurant_bahia_show',
        path:
          'https://avatars.dicebear.com/api/jdenticon/restaurant_bahia_show.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'restaurant_cozinha_master',
        path:
          'https://avatars.dicebear.com/api/jdenticon/restaurant_cozinha_master.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'restaurant_delicia_light',
        path:
          'https://avatars.dicebear.com/api/jdenticon/restaurant_delicia_light.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'restaurant_tapioca_mistura',
        path:
          'https://avatars.dicebear.com/api/jdenticon/restaurant_tapioca_mistura.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },

      // PRODUCTS
      {
        name: 'product_chopp',
        path: 'https://avatars.dicebear.com/api/jdenticon/product_chopp.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'product_empadao',
        path: 'https://avatars.dicebear.com/api/jdenticon/product_empadao.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'product_marmitex',
        path: 'https://avatars.dicebear.com/api/jdenticon/product_marmitex.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'product_suco_laranja',
        path:
          'https://avatars.dicebear.com/api/jdenticon/product_suco_laranja.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'product_biffet_livre',
        path:
          'https://avatars.dicebear.com/api/jdenticon/product_biffet_livre.svg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: () => {},
};
