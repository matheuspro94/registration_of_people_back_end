const Sequelize = require('sequelize');

class User extends Sequelize.Model {
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

module.exports = User;
