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

  // TODO: show(exibir único usuário)
  // TODO: update
  // TODO: delete
}

export default new RestaurantController();
