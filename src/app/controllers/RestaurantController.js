import Restaurant from '../models/Restaurant';

class RestaurantController {
  async store(req, res) {
    const { id, name, address } = await Restaurant.create(req.body);

    return res.json({
      id,
      name,
      address,
    });
  }
}

export default new RestaurantController();
