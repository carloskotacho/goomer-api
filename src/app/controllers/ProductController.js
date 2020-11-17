import { Op } from 'sequelize';

import File from '../models/File';
import Product from '../models/Product';
import Restaurant from '../models/Restaurant';

class ProductController {
  async index(req, res) {
    const { search = '', page = 1 } = req.query;

    const products = await Product.findAndCountAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${search}%`,
            },
          },
          {
            category: {
              [Op.iLike]: `%${search}%`,
            },
          },
        ],
      },
      limit: 5,
      offset: (page - 1) * 5,
      attributes: {
        exclude: ['avatar_id', 'restaurant_id', 'createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Restaurant,
          as: 'restaurant',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
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

  async update(req, res) {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const restaurant = await Restaurant.findByPk(req.body.restaurant_id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const {
      id,
      restaurant_id,
      name,
      price,
      category,
      description,
      day_week,
      promotion_schedules,
    } = await product.update(req.body);

    return res.json({
      id,
      restaurant_id,
      name,
      price,
      category,
      description,
      day_week,
      promotion_schedules,
    });
  }

  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();

    return res.status(204).json();
  }
}

export default new ProductController();
