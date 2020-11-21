module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('restaurants', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      week_opening_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      week_closing_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weekend_opening_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weekend_closing_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      schedules: {
        type: Sequelize.STRING,
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

  down: (queryInterface) => queryInterface.dropTable('restaurants'),
};

/**

  TODO: ex.: De Segunda à Sexta das 09h as 18h e de Sabado à Domingo das 11h as 20h

 */
