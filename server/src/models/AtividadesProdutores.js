const { Model, DataTypes } = require("sequelize");

class AtividadeProdutores extends Model {
  static init(sequelize) {
    super.init(
      {
        atividade: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "atividades_produtores",
      }
    );
  }
}

module.exports = AtividadeProdutores;
