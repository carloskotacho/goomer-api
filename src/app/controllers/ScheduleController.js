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
}

export default new ScheduleController();
