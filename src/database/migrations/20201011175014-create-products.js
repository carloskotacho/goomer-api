module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: { model: 'restaurants', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      promotion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      promotional_price: {
        type: Sequelize.STRING,
      },
      day_week: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      promotion_start_time: {
        type: Sequelize.STRING,
      },
      promotion_end_time: {
        type: Sequelize.STRING,
      },
      promotion_schedules: {
        type: Sequelize.STRING,
        defaultValue: 'Não há promoção',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('products'),
};
