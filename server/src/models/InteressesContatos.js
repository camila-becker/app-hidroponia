const { Model, DataTypes } = require("sequelize");

class InteressesContatos extends Model {
  static init(sequelize) {
    super.init(
      {
        interesse: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "interesses_contatos",
      }
    );
  }
}

module.exports = InteressesContatos;
