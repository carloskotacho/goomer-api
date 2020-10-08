import Restaurant from '../models/Restaurant';

class RestaurantController {
  async index(req, res) {
    const restaurants = await Restaurant.findAll({
      attributes: {
        exclude: ['name', 'createdAt', 'updatedAt'],
      },
    });

    return res.json(restaurants);
  }

  async store(req, res) {
    const { id, name, address } = await Restaurant.create(req.body);

    return res.json({
      id,
      name,
      address,
    });
  }

  // TODO: index(listagem de usuários)
  // TODO: show(exibir único usuário)
  // TODO: update
  // TODO: delete
}

export default new RestaurantController();
