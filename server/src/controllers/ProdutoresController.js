const Produtores = require("../models/Produtores");

module.exports = {
  async index(req, res) {
    try {
      const produtores = await Produtores.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(produtores);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const produtor = await Produtores.findByPk(id);
      if (produtor == null) {
        return res.status(404).json({ error: "Produtor não encontrado!" });
      }
      return res.json(produtor);
    } catch (error) {
      res.status(404).json({ error: "Produtor não encontrado!" });
    }
  },

  async store(req, res) {
    try {
      const {
        empresa,
        registro,
        razao_social,
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
        consideracoes_registros,
        site,
        datas_contato,
        cultivares,
        metodo_cultivo,
        outro_metodo,
        area_fisica_total,
        area_hidroponica,
        vol_producao_total,
        localizacao,
        outro_cultivo_paralelo,
        migrou_para_hidroponia,
        profissao_anterior,
        movimentacao_financeira,
      } = req.body;
      const produtor = await Produtores.create({
        empresa,
        registro,
        razao_social,
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
        consideracoes_registros,
        site,
        datas_contato,
        cultivares,
        metodo_cultivo,
        outro_metodo,
        area_fisica_total,
        area_hidroponica,
        vol_producao_total,
        localizacao,
        outro_cultivo_paralelo,
        migrou_para_hidroponia,
        profissao_anterior,
        movimentacao_financeira,
        data_hora: Date.now(),
      });
      return res.json(produtor);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const produtor = await Produtores.findByPk(id);
      const {
        empresa,
        registro,
        razao_social,
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
        consideracoes_registros,
        site,
        datas_contato,
        cultivares,
        metodo_cultivo,
        outro_metodo,
        area_fisica_total,
        area_hidroponica,
        vol_producao_total,
        localizacao,
        outro_cultivo_paralelo,
        migrou_para_hidroponia,
        profissao_anterior,
        movimentacao_financeira,
      } = req.body;

      produtor.empresa = empresa;
      produtor.registro = registro;
      produtor.razao_social = razao_social;
      produtor.pais = pais;
      produtor.uf = uf;
      produtor.cidade = cidade;
      produtor.endereco = endereco;
      produtor.atividade = atividade;
      produtor.segmento = segmento;
      produtor.status = status;
      produtor.contato_1 = contato_1;
      produtor.celular_1 = celular_1;
      produtor.email_1 = email_1;
      produtor.nome = nome_1;
      produtor.cargo_1 = cargo_1;
      produtor.contato_2 = contato_2;
      produtor.celular_2 = celular_2;
      produtor.email_2 = email_2;
      produtor.nome_2 = nome_2;
      produtor.cargo_2 = cargo_2;
      produtor.contato_3 = contato_3;
      produtor.celular_3 = celular_3;
      produtor.email_3 = email_3;
      produtor.nome_3 = nome_3;
      produtor.cargo_3 = cargo_3;
      produtor.contato_4 = contato_4;
      produtor.celular_4 = celular_4;
      produtor.email_4 = email_4;
      produtor.nome_4 = nome_4;
      produtor.cargo_4 = cargo_4;
      produtor.consideracoes_registros = consideracoes_registros;
      produtor.site = site;
      produtor.datas_contato = datas_contato;
      produtor.cultivares = cultivares;
      produtor.metodo_cultivo = metodo_cultivo;
      produtor.outro_metodo = outro_metodo;
      produtor.area_fisica_total = area_fisica_total;
      produtor.area_hidroponica = area_hidroponica;
      produtor.vol_producao_total = vol_producao_total;
      produtor.localizacao = localizacao;
      produtor.outro_cultivo_paralelo = outro_cultivo_paralelo;
      produtor.migrou_para_hidroponia = migrou_para_hidroponia;
      produtor.profissao_anterior = profissao_anterior;
      produtor.movimentacao_financeira = movimentacao_financeira;
      produtor.data_hora = Date.now();

      const resultadoProdutor = await produtor.save();
      return res.json(resultadoProdutor);
    } catch (error) {
      return res.status(404).json({ error: "Produtor não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const produtor = await Produtores.findOne({
        where: {
          id,
        },
      });
      produtor.destroy();
      return res.json(produtor);
    } catch (error) {
      return res.status(404).json({ error: "Produtor não encontrado!" });
    }
  },
};
