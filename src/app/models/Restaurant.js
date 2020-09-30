import Sequelize, { Model } from 'sequelize';

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        opening_hours: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Restaurant;
