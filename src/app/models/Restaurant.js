import Sequelize, { Model } from 'sequelize';

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        week_opening_time: Sequelize.VIRTUAL,
        week_closing_time: Sequelize.VIRTUAL,
        weekend_opening_time: Sequelize.VIRTUAL,
        weekend_closing_time: Sequelize.VIRTUAL,
        schedules: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (restaurant) => {
      const {
        week_opening_time: weekOpeningTime,
        week_closing_time: weekClosingTime,
        weekend_opening_time: weekendOpeningTime,
        weekend_closing_time: weekendClosingTime,
      } = restaurant;

      if (
        weekOpeningTime &&
        weekClosingTime &&
        weekendOpeningTime &&
        weekendClosingTime
      ) {
        restaurant.schedules =
          `De Segunda à Sexta das ${weekOpeningTime}h as ` +
          `${weekClosingTime}h e de Sábado à Domingo das ${weekendOpeningTime}h` +
          ` as ${weekClosingTime}h`;
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Restaurant;
