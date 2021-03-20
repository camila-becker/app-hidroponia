const InteressesContatos = require("../models/InteressesContatos");

module.exports = {
  async index(req, res) {
    try {
      const interesses = await InteressesContatos.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(interesses);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const interesses = await InteressesContatos.findByPk(id);
      return res.json(interesses);
    } catch (error) {
      res.status(404).json({ error: "Interesse não encontrado!" });
    }
  },

  async store(req, res) {
    try {
      const { interesse } = req.body;

      const buscarInteresse = await InteressesContatos.findOne({
        where: { interesse },
      });
      if (buscarInteresse) {
        return res.status(400).json({
          message: "Já existe um interesse cadastrado com esse nome!",
        });
      } else {
        const interesse = await InteressesContatos.create({
          interesse,
          data_hora: Date.now(),
        });
        return res.json(interesse);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const interesse = await InteressesContatos.findByPk(id);
      const { interesse } = req.body;

      interesse.interesse = interesse;

      const resultadoInteresse = await interesse.save();
      return res.json(resultadoInteresse);
    } catch (error) {
      return res.status(404).json({ error: "Interesse não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const interesse = await InteressesContatos.findOne({
        where: {
          id,
        },
      });
      interesse.destroy();
      return res.json(interesse);
    } catch (error) {
      return res.status(404).json({ error: "Interesse não encontrado!" });
    }
  },
};
