"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("contatos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
      },
      razao_social: {
        type: Sequelize.STRING,
      },
      documento: {
        type: Sequelize.STRING,
      },
      pais: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      cidade: {
        type: Sequelize.STRING,
      },
      cep: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      atividade: {
        type: Sequelize.STRING,
      },
      segmento: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      nome_contato_1: {
        type: Sequelize.STRING,
      },
      cargo_1: {
        type: Sequelize.STRING,
      },
      data_aniversario_1: {
        type: Sequelize.STRING,
      },
      telefone_1: {
        type: Sequelize.STRING,
      },
      celular_1: {
        type: Sequelize.STRING,
      },
      whatsapp_1: {
        type: Sequelize.STRING,
      },
      email_1: {
        type: Sequelize.STRING,
      },
      redes_sociais_1: {
        type: Sequelize.STRING,
      },
      nome_contato_2: {
        type: Sequelize.STRING,
      },
      cargo_2: {
        type: Sequelize.STRING,
      },
      data_aniversario_2: {
        type: Sequelize.STRING,
      },
      telefone_2: {
        type: Sequelize.STRING,
      },
      celular_2: {
        type: Sequelize.STRING,
      },
      whatsapp_2: {
        type: Sequelize.STRING,
      },
      email_2: {
        type: Sequelize.STRING,
      },
      redes_sociais_2: {
        type: Sequelize.STRING,
      },
      nome_contato_3: {
        type: Sequelize.STRING,
      },
      cargo_3: {
        type: Sequelize.STRING,
      },
      data_aniversario_3: {
        type: Sequelize.STRING,
      },
      telefone_3: {
        type: Sequelize.STRING,
      },
      celular_3: {
        type: Sequelize.STRING,
      },
      whatsapp_3: {
        type: Sequelize.STRING,
      },
      email_3: {
        type: Sequelize.STRING,
      },
      redes_sociais_3: {
        type: Sequelize.STRING,
      },
      nome_contato_4: {
        type: Sequelize.STRING,
      },
      cargo_4: {
        type: Sequelize.STRING,
      },
      data_aniversario_4: {
        type: Sequelize.STRING,
      },
      telefone_4: {
        type: Sequelize.STRING,
      },
      celular_4: {
        type: Sequelize.STRING,
      },
      whatsapp_4: {
        type: Sequelize.STRING,
      },
      email_4: {
        type: Sequelize.STRING,
      },
      redes_sociais_4: {
        type: Sequelize.STRING,
      },
      site: {
        type: Sequelize.STRING,
      },
      registros: {
        type: Sequelize.STRING,
      },
      datas_contato: {
        type: Sequelize.STRING,
      },
      data_hora: {
        type: Sequelize.DATE,
      },
      data_nascimento: {
        type: Sequelize.STRING,
      },
      responsavel: {
        type: Sequelize.STRING,
      },
      atuacao_mercado: {
        type: Sequelize.STRING,
      },
      interesse: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contatos");
  },
};
