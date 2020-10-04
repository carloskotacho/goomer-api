module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('schedules', {
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
        onDelete: 'SET NULL',
        allowNull: true,
      },
      day_week: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      open_hours: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      closed_hours: {
        type: Sequelize.TIME,
        allowNull: false,
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

  down: (queryInterface) => queryInterface.dropTable('schedules'),
};
