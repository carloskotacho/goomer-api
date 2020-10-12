import Product from '../models/Product';
import Restaurant from '../models/Restaurant';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      attributes: {
        exclude: ['restaurant_id', 'createdAt', 'updatedAt'],
      },
      include: {
        model: Restaurant,
        as: 'restaurant',
        attributes: ['id', 'name'],
      },
    });

    return res.json(products);
  }

  async show(req, res) {
    const restaurantId = req.params.id;

    const restaurant = await Restaurant.findByPk(restaurantId, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const products = await Product.findAll({
      where: {
        restaurant_id: restaurantId,
      },
      attributes: {
        exclude: ['restaurant_id', 'createdAt', 'updatedAt'],
      },
      include: {
        model: Restaurant,
        as: 'restaurant',
        attributes: ['id', 'name'],
      },
    });

    if (!products) {
      return res.status(404).json({ error: 'Products not found' });
    }

    return res.json(products);
  }

  async store(req, res) {
    const {
      id,
      name,
      price,
      category,
      description,
      day_week,
      promotion_schedules,
    } = await Product.create(req.body);

    return res.json({
      id,
      name,
      price,
      category,
      description,
      day_week,
      promotion_schedules,
    });
  }
}

export default new ProductController();
