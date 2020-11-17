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
        allowNull: true,
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
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      day_week: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      promotion_schedules: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
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
