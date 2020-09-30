import Restaurant from '../models/Restaurant';

class RestaurantController {
  async store(req, res) {
    const { id, name, address, opening_hours } = await Restaurant.create(
      req.body
    );

    return res.json({
      id,
      name,
      address,
      opening_hours,
    });
  }
}

export default new RestaurantController();
