const MetodoCultivo = require("../models/MetodoCultivo");

module.exports = {
  async index(req, res) {
    try {
      const metodo = await MetodoCultivo.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(metodo);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const metodos = await MetodoCultivo.findByPk(id);
      return res.json(metodos);
    } catch (error) {
      res.status(404).json({ error: "Método não encontrado!" });
    }
  },

  async store(req, res) {
    try {
      const { metodo } = req.body;

      const buscarMetodo = await MetodoCultivo.findOne({
        where: { metodo },
      });
      if (buscarMetodo) {
        return res.status(400).json({
          message: "Já existe um método cadastrado com esse nome!",
        });
      } else {
        const metodo = await MetodoCultivo.create({
          metodo,
          data_hora: Date.now(),
        });
        return res.json(metodo);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const metodo = await MetodoCultivo.findByPk(id);
      const { metodo } = req.body;

      metodo.metodo = metodo;

      const resultadoMetodo = await metodo.save();
      return res.json(resultadoMetodo);
    } catch (error) {
      return res.status(404).json({ error: "Método não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const metodo = await MetodoCultivo.findOne({
        where: {
          id,
        },
      });
      metodo.destroy();
      return res.json(metodo);
    } catch (error) {
      return res.status(404).json({ error: "Método não encontrado!" });
    }
  },
};
