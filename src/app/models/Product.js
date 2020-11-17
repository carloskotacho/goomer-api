import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.STRING,
        category: Sequelize.STRING,
        promotion: Sequelize.VIRTUAL,
        description: Sequelize.STRING,
        day_week: Sequelize.ARRAY(Sequelize.STRING),
        promotion_schedules: Sequelize.ARRAY(Sequelize.STRING),
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
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Product;
