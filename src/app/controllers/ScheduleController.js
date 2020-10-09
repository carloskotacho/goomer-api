import { NOT_FOUND } from 'http-status-codes';

import Restaurant from '../models/Restaurant';
import Schedule from '../models/Schedule';

class ScheduleController {
  async index(req, res) {
    const schedules = await Schedule.findAll({
      attributes: {
        exclude: ['restaurant_id', 'createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Restaurant,
          as: 'restaurant',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(schedules);
  }

  async store(req, res) {
    const restaurant = await Restaurant.findByPk(req.body.restaurant_id);

    if (!restaurant) {
      return res.status(NOT_FOUND).json({ error: 'Restaurant not found' });
    }

    // TODO: open_hours
    // TODO: closed_hours
  }
}

export default new ScheduleController();
