import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import ProductController from './app/controllers/ProductController';

import validateRestaurantStore from './app/validators/RestaurantStore';
import validateProductStore from './app/validators/ProductStore';

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

routes.get('/api/products/v1', ProductController.index);
routes.get('/api/products/restaurant/:id/v1', ProductController.show);
routes.post('/api/products/v1', validateProductStore, ProductController.store);

module.exports = routes;
