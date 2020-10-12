import Sequelize from 'sequelize';

import Restaurant from '../app/models/Restaurant';
import Product from '../app/models/Product';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [Restaurant, Product, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
