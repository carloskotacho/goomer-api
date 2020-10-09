import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';

import validateRestaurantStore from './app/validators/RestaurantStore';

const routes = new Router();

routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:id', RestaurantController.show);
routes.post(
  '/restaurants',
  validateRestaurantStore,
  RestaurantController.store
);
routes.put('/restaurants/:id', RestaurantController.update);
routes.delete('/restaurants/:id', RestaurantController.delete);

module.exports = routes;
