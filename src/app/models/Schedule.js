import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        day_week: Sequelize.STRING,
        open_hours: Sequelize.TIME,
        closed_hours: Sequelize.TIME,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant',
    });
  }
}

export default Schedule;
