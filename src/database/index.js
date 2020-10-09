import Sequelize from 'sequelize';

import Restaurant from '../app/models/Restaurant';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [Restaurant, Appointment];

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
