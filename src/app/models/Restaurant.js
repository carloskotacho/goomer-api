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
      const weekOpeningTime = restaurant.week_opening_time;
      const weekClosingTime = restaurant.week_closing_time;
      const weekendOpeningTime = restaurant.weekend_opening_time;
      const weekendClosingTime = restaurant.weekend_closing_time;

      if (
        weekOpeningTime &&
        weekClosingTime &&
        weekendOpeningTime &&
        weekendClosingTime
      ) {
        restaurant.schedules =
          `De Segunda à Sexta das ${weekOpeningTime} as` +
          ` ${weekClosingTime} e de Sábado à Domingo das ${weekendOpeningTime}` +
          ` as ${weekClosingTime}`;
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Restaurant;
