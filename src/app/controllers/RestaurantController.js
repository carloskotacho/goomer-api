import { Op } from 'sequelize';

import Restaurant from '../models/Restaurant';

class RestaurantController {
  async index(req, res) {
    const { search } = req.query;

    const restaurants = await Restaurant.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
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

    let schedules = ``;

    if (restaurant.schedules.length === 4) {
      schedules =
        `De Segunda à Sexta das ` +
        `${restaurant.schedules[0]}h as ` +
        `${restaurant.schedules[1]}h e de Sabado à Domingo das ` +
        `${restaurant.schedules[2]}h as ` +
        `${restaurant.schedules[3]}h`;
    }

    return res.json({
      name: restaurant.name,
      address: restaurant.address,
      schedules,
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

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    await restaurant.destroy();

    return res.status(204).json();
  }
}

export default new RestaurantController();
