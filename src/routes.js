import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import RestaurantController from './app/controllers/RestaurantController';
import ProductController from './app/controllers/ProductController';
import FileController from './app/controllers/FileController';

import validateRestaurantStore from './app/validators/RestaurantStore';
import validateRestaurantUpdate from './app/validators/RestaurantUpdate';
import validateProductStore from './app/validators/ProductStore';
import validateProductUpdate from './app/validators/ProductUpdate';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/api/restaurants/v1', RestaurantController.index);
routes.get('/api/restaurants/all/v1', RestaurantController.listAll);
routes.get('/api/restaurants/:id/v1', RestaurantController.show);
routes.post(
  '/api/restaurants/v1',
  validateRestaurantStore,
  RestaurantController.store
);
routes.put(
  '/api/restaurants/:id/v1',
  validateRestaurantUpdate,
  RestaurantController.update
);
routes.delete('/api/restaurants/:id/v1', RestaurantController.delete);

routes.get('/api/products/v1', ProductController.index);
routes.get('/api/products/:id/v1', ProductController.show);
routes.get(
  '/api/products/restaurant/:id/v1',
  ProductController.findProductsByRestaurant
);
routes.post('/api/products/v1', validateProductStore, ProductController.store);
routes.put(
  '/api/products/:id/v1',
  validateProductUpdate,
  ProductController.update
);
routes.delete('/api/products/:id/v1', ProductController.delete);

routes.post('/api/files/v1', upload.single('file'), FileController.store);

module.exports = routes;
