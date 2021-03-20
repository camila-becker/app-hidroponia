const { Model, DataTypes } = require("sequelize");

class Contato extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        razao_social: DataTypes.STRING,
        documento: DataTypes.STRING,
        pais: DataTypes.STRING,
        uf: DataTypes.STRING,
        cidade: DataTypes.STRING,
        cep: DataTypes.STRING,
        endereco: DataTypes.STRING,
        atividade: DataTypes.STRING,
        segmento: DataTypes.STRING,
        status: DataTypes.STRING,
        nome_contato_1: DataTypes.STRING,
        cargo_1: DataTypes.STRING,
        data_aniversario_1: DataTypes.STRING,
        telefone_1: DataTypes.STRING,
        celular_1: DataTypes.STRING,
        whatsapp_1: DataTypes.STRING,
        email_1: DataTypes.STRING,
        redes_sociais_1: DataTypes.STRING,
        nome_contato_2: DataTypes.STRING,
        cargo_2: DataTypes.STRING,
        data_aniversario_2: DataTypes.STRING,
        telefone_2: DataTypes.STRING,
        celular_2: DataTypes.STRING,
        whatsapp_2: DataTypes.STRING,
        email_2: DataTypes.STRING,
        redes_sociais_2: DataTypes.STRING,
        nome_contato_3: DataTypes.STRING,
        cargo_3: DataTypes.STRING,
        data_aniversario_3: DataTypes.STRING,
        telefone_3: DataTypes.STRING,
        celular_3: DataTypes.STRING,
        whatsapp_3: DataTypes.STRING,
        email_3: DataTypes.STRING,
        redes_sociais_3: DataTypes.STRING,
        nome_contato_4: DataTypes.STRING,
        cargo_4: DataTypes.STRING,
        data_aniversario_4: DataTypes.STRING,
        telefone_4: DataTypes.STRING,
        celular_4: DataTypes.STRING,
        whatsapp_4: DataTypes.STRING,
        email_4: DataTypes.STRING,
        redes_sociais_4: DataTypes.STRING,
        site: DataTypes.STRING,
        registros: DataTypes.STRING,
        datas_contato: DataTypes.STRING,
        data_hora: DataTypes.DATE,
        data_nascimento: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        atuacao_mercado: DataTypes.STRING,
        interesse: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "contatos",
      }
    );
  }
}

module.exports = Contato;
