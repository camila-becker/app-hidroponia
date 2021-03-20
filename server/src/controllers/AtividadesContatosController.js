const AtividadesContatos = require("../models/AtividadesContatos");

module.exports = {
  async index(req, res) {
    try {
      const atividades = await AtividadesContatos.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(atividades);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const atividades = await AtividadesContatos.findByPk(id);
      return res.json(atividades);
    } catch (error) {
      res.status(404).json({ error: "Atividade não encontrada!" });
    }
  },

  async store(req, res) {
    try {
      const { atividade } = req.body;

      const buscarAtividade = await AtividadesContatos.findOne({
        where: { atividade },
      });
      if (buscarAtividade) {
        return res.status(400).json({
          message: "Já existe uma atividade cadastrada com esse nome!",
        });
      } else {
        const atividade = await AtividadesContatos.create({
          atividade,
          data_hora: Date.now(),
        });
        return res.json(atividade);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const atividade = await AtividadesContatos.findByPk(id);
      const { atividade } = req.body;

      atividade.atividade = atividade;

      const resultadoAtividade = await atividade.save();
      return res.json(resultadoAtividade);
    } catch (error) {
      return res.status(404).json({ error: "Atividade não encontrada!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const atividade = await AtividadesContatos.findOne({
        where: {
          id,
        },
      });
      atividade.destroy();
      return res.json(atividade);
    } catch (error) {
      return res.status(404).json({ error: "Atividade não encontrada!" });
    }
  },
};
