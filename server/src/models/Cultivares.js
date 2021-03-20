const { Model, DataTypes } = require("sequelize");

class Cultivares extends Model {
  static init(sequelize) {
    super.init(
      {
        cultivares: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "cultivares_produtores",
      }
    );
  }
}

module.exports = Cultivares;
