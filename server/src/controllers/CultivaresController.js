const Cultivares = require("../models/Cultivares");

module.exports = {
  async index(req, res) {
    try {
      const cultivares = await Cultivares.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(cultivares);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const cultivares = await Cultivares.findByPk(id);
      return res.json(cultivares);
    } catch (error) {
      res.status(404).json({ error: "Cultivo não encontrado!" });
    }
  },

  async store(req, res) {
    try {
      const { cultivares } = req.body;

      const buscarCultivo = await Cultivares.findOne({
        where: { cultivares },
      });
      if (buscarCultivo) {
        return res.status(400).json({
          message: "Já existe um cultivo cadastrado com esse nome!",
        });
      } else {
        const cultivares = await Cultivares.create({
          cultivares,
          data_hora: Date.now(),
        });
        return res.json(cultivares);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const cultivares = await Cultivares.findByPk(id);
      const { cultivares } = req.body;

      cultivares.cultivares = cultivares;

      const resultadoCultivares = await cultivares.save();
      return res.json(resultadoCultivares);
    } catch (error) {
      return res.status(404).json({ error: "Cultivo não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const cultivares = await Cultivares.findOne({
        where: {
          id,
        },
      });
      cultivares.destroy();
      return res.json(cultivares);
    } catch (error) {
      return res.status(404).json({ error: "Cultivo não encontrado!" });
    }
  },
};
