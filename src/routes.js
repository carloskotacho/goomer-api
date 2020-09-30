import { Router } from 'express';

import Restaurant from './app/models/Restaurant';

const routes = new Router();

routes.get('/', async (req, res) => {
  const restaurant = await Restaurant.create({
    name: 'Churrascaria do Chef',
    address: 'Avenida Rui Barbosa, 162',
    opening_hours: 'De Segunda à Sexta das 11h as 14h e de Sabado à Domingo das 19h as 23h',
  });

  return res.json(restaurant);
});

module.exports = routes;
