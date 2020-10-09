import Restaurant from '../models/Restaurant';

class RestaurantController {
  async index(req, res) {
    const restaurants = await Restaurant.findAll({
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

    return res.json(restaurant);
  }

  async store(req, res) {
    const { id, name, address } = await Restaurant.create(req.body);

    return res.json({
      id,
      name,
      address,
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
