import Product from '../models/Product';
import Restaurant from '../models/Restaurant';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      attributes: {
        exclude: ['restaurant_id', 'createdAt', 'updatedAt'],
      },
      include: {
        model: Restaurant,
        as: 'restaurant',
        attributes: ['id', 'name'],
      },
    });

    return res.json(products);
  }
}

export default new ProductController();
