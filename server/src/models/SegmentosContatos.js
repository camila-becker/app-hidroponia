const { Model, DataTypes } = require("sequelize");

class SegmentosContatos extends Model {
  static init(sequelize) {
    super.init(
      {
        segmento: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "segmentos_contatos",
      }
    );
  }
}

module.exports = SegmentosContatos;
