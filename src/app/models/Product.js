import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.STRING,
        category: Sequelize.STRING,
        promotion: Sequelize.VIRTUAL,
        description: Sequelize.VIRTUAL,
        promotional_price: Sequelize.STRING,
        day_week: Sequelize.VIRTUAL(Sequelize.ARRAY(Sequelize.STRING)),
        promotion_schedules: Sequelize.STRING,
        promotion_start_time: Sequelize.STRING,
        promotion_end_time: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (product) => {
      const {
        description,
        promotional_price: promotionalPrice,
        day_week: dayWeek,
        promotion_start_time: promotionStartTime,
        promotion_end_time: promotionEndTime,
      } = product;

      if (description && promotionalPrice && dayWeek) {
        product.promotion_schedules = `${description} (${dayWeek} das ${promotionStartTime}h as ${promotionEndTime}h)`;
      }
    });

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
