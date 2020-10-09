import Appointment from '../models/Appointment';
import Restaurant from '../models/Restaurant';

class AppointmentController {
  async indexByRestaurant(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.restaurant_id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const appointments = await Appointment.findAll({
      where: {
        restaurant_id: restaurant.id,
      },
      attributes: {
        exclude: ['restaurant_id', 'createdAt', 'updatedAt'],
      },
    });

    if (!appointments) {
      return res.status(404).json({ error: 'Appointments not found' });
    }

    return res.json(appointments);
  }
}

export default new AppointmentController();
