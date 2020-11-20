import { Op } from 'sequelize';

import File from '../models/File';
import Restaurant from '../models/Restaurant';
import Product from '../models/Product';

class RestaurantController {
  async index(req, res) {
    const { search = '', page = 1 } = req.query;

    const restaurants = await Restaurant.findAndCountAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
      limit: 5,
      offset: (page - 1) * 5,
      attributes: {
        exclude: ['avatar_id', 'createdAt', 'updatedAt'],
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(restaurants);
  }

  async listAll(req, res) {
    const restaurants = await Restaurant.findAll({
      attributes: ['id', 'name'],
    });

    return res.json(restaurants);
  }

  async show(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    return res.json({
      name: restaurant.name,
      address: restaurant.address,
      schedules: restaurant.schedules,
    });
  }

  async store(req, res) {
    const { id, name, address, schedules } = await Restaurant.create(req.body);

    return res.json({
      id,
      name,
      address,
      schedules,
    });
  }

  async update(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const { id, name } = await restaurant.update(req.body);

    return res.json({ id, name });
  }

  async delete(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.id);
    const product = await Product.findOne({
      where: { restaurant_id: restaurant.id },
    });

    if (product) {
      return res
        .status(400)
        .json({ error: 'There are products associated with this restaurant' });
    }

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    await restaurant.destroy();

    return res.status(204).json();
  }
}

export default new RestaurantController();
