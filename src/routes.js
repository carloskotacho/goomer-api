import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';

const routes = new Router();

routes.post('/restaurants', RestaurantController.store);

module.exports = routes;
