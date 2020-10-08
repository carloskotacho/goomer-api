import Sequelize from 'sequelize';

import Schedule from '../app/models/Schedule';
import Restaurant from '../app/models/Restaurant';
import databaseConfig from '../config/database';

const models = [Schedule, Restaurant];

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
