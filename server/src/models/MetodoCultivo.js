const { Model, DataTypes } = require("sequelize");

class MetodoCultivo extends Model {
  static init(sequelize) {
    super.init(
      {
        metodo: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "metodo_cultivo_produtores",
      }
    );
  }
}

module.exports = MetodoCultivo;
