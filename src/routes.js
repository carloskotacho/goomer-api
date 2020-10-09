import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();

routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:id', RestaurantController.show);
routes.post('/restaurants', RestaurantController.store);

routes.get('/schedules', ScheduleController.index);

module.exports = routes;
