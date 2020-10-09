import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import AppointmentController from './app/controllers/AppointmentController';

import validateRestaurantStore from './app/validators/RestaurantStore';

const routes = new Router();

routes.get('/api/restaurants/v1', RestaurantController.index);
routes.get('/api/restaurants/:id/v1', RestaurantController.show);
routes.post(
  '/api/restaurants/v1',
  validateRestaurantStore,
  RestaurantController.store
);
routes.put('/api/restaurants/:id/v1', RestaurantController.update);
routes.delete('/api/restaurants/:id/v1', RestaurantController.delete);

routes.get(
  '/api/appointments/restaurant/:restaurant_id/schedules/v1',
  AppointmentController.indexByRestaurant
);

module.exports = routes;
