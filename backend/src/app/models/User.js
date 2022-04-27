import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cpf: Sequelize.INTEGER,
      birth_date: Sequelize.INTEGER,
      email: Sequelize.STRING,
      phone: Sequelize.INTEGER,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
    },
    {
      sequelize
    })
  }
}

export default User;
