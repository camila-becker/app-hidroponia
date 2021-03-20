const Contatos = require("../models/Contatos");

module.exports = {
  async index(req, res) {
    try {
      const contatos = await Contatos.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(contatos);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const contato = await Contatos.findByPk(id);
      return res.json(contato);
    } catch (error) {
      res.status(404).json({ error: "Contato não encontrado!" });
    }
  },

  async store(req, res) {
    try {
      const {
        empresa,
        razao_social,
        cpf_cnpj,
        pais,
        uf,
        cidade,
        endereco,
        atividade,
        segmento,
        status,
        contato_1,
        celular_1,
        email_1,
        nome_1,
        cargo_1,
        contato_2,
        celular_2,
        email_2,
        nome_2,
        cargo_2,
        contato_3,
        celular_3,
        email_3,
        nome_3,
        cargo_3,
        contato_4,
        celular_4,
        email_4,
        nome_4,
        cargo_4,
        site,
        consideracoes_registros,
        datas_contato,
        tipo_interacao,
        tipo_pessoa,
        data_nascimento,
        origem,
        responsavel,
        atuacao_mercado,
        instagram_1,
        instagram_2,
        instagram_3,
        instagram_4,
        interesse,
      } = req.body;

      const buscarCpfCnpj = await Contatos.findOne({ where: { cpf_cnpj } });
      if (buscarCpfCnpj) {
        return res
          .status(400)
          .json({ message: "Já existe um cadastro para esse CPF/CNPJ!" });
      } else {
        const contato = await Contatos.create({
          empresa,
          razao_social,
          cpf_cnpj,
          pais,
          uf,
          cidade,
          endereco,
          atividade,
          segmento,
          status,
          contato_1,
          celular_1,
          email_1,
          nome_1,
          cargo_1,
          contato_2,
          celular_2,
          email_2,
          nome_2,
          cargo_2,
          contato_3,
          celular_3,
          email_3,
          nome_3,
          cargo_3,
          contato_4,
          celular_4,
          email_4,
          nome_4,
          cargo_4,
          site,
          consideracoes_registros,
          datas_contato,
          data_hora: Date.now(),
          tipo_interacao,
          tipo_pessoa,
          data_nascimento,
          origem,
          responsavel,
          atuacao_mercado,
          instagram_1,
          instagram_2,
          instagram_3,
          instagram_4,
          interesse,
        });
        return res.json(contato);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const contato = await Contatos.findByPk(id);
      const {
        empresa,
        razao_social,
        cpf_cnpj,
        pais,
        uf,
        cidade,
        endereco,
        atividade,
        segmento,
        status,
        contato_1,
        celular_1,
        email_1,
        nome_1,
        cargo_1,
        contato_2,
        celular_2,
        email_2,
        nome_2,
        cargo_2,
        contato_3,
        celular_3,
        email_3,
        nome_3,
        cargo_3,
        contato_4,
        celular_4,
        email_4,
        nome_4,
        cargo_4,
        site,
        consideracoes_registros,
        datas_contato,
        tipo_interacao,
        tipo_pessoa,
        data_nascimento,
        origem,
        responsavel,
        atuacao_mercado,
        instagram_1,
        instagram_2,
        instagram_3,
        instagram_4,
        interesse,
      } = req.body;

      contato.empresa = empresa;
      contato.razao_social = razao_social;
      contato.cpf_cnpj = cpf_cnpj;
      contato.pais = pais;
      contato.uf = uf;
      contato.cidade = cidade;
      contato.endereco = endereco;
      contato.atividade = atividade;
      contato.segmento = segmento;
      contato.status = status;
      contato.contato_1 = contato_1;
      contato.celular_1 = celular_1;
      contato.email_1 = email_1;
      contato.nome_1 = nome_1;
      contato.cargo_1 = cargo_1;
      contato.contato_2 = contato_2;
      contato.celular_2 = celular_2;
      contato.email_2 = email_2;
      contato.nome_2 = nome_2;
      contato.cargo_2 = cargo_2;
      contato.contato_3 = contato_3;
      contato.celular_3 = celular_3;
      contato.email_3 = email_3;
      contato.nome_3 = nome_3;
      contato.cargo_3 = cargo_3;
      contato.contato_4 = contato_4;
      contato.celular_4 = celular_4;
      contato.email_4 = email_4;
      contato.nome_4 = nome_4;
      contato.cargo_4 = cargo_4;
      contato.site = site;
      contato.consideracoes_registros = consideracoes_registros;
      contato.datas_contato = datas_contato;
      contato.tipo_interacao = tipo_interacao;
      contato.tipo_pessoa = tipo_pessoa;
      contato.data_nascimento = data_nascimento;
      contato.origem = origem;
      contato.responsavel = responsavel;
      contato.atuacao_mercado = atuacao_mercado;
      contato.instagram_1 = instagram_1;
      contato.instagram_2 = instagram_2;
      contato.instagram_3 = instagram_3;
      contato.instagram_4 = instagram_4;
      contato.interesse = interesse;

      const resultadoContato = await contato.save();
      return res.json(resultadoContato);
    } catch (error) {
      return res.status(404).json({ error: "Contato não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const contato = await Contatos.findOne({
        where: {
          id,
        },
      });
      contato.destroy();
      return res.json(contato);
    } catch (error) {
      return res.status(404).json({ error: "Contato não encontrado!" });
    }
  },
};
