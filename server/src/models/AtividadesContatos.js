const { Model, DataTypes } = require("sequelize");

class AtividadesContatos extends Model {
  static init(sequelize) {
    super.init(
      {
        atividade: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "atividades_contatos",
      }
    );
  }
}

module.exports = AtividadesContatos;
