const SegmentosContatos = require("../models/SegmentosContatos");

module.exports = {
  async index(req, res) {
    try {
      const segmento = await SegmentosContatos.findAll({
        raw: true,
        order: [["created_at", "DESC"]],
      });
      return res.json(segmento);
    } catch (error) {
      res.status(404).json({ error: "Nenhum registro encontrado!" });
      console.log(error);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const segmentos = await SegmentosContatos.findByPk(id);
      return res.json(segmentos);
    } catch (error) {
      res.status(404).json({ error: "Segmento não encontrado!" });
    }
  },

  async store(req, res) {
    try {
      const { segmento } = req.body;

      const buscarSegmento = await SegmentosContatos.findOne({
        where: { segmento },
      });
      if (buscarSegmento) {
        return res.status(400).json({
          message: "Já existe um segmento cadastrado com esse nome!",
        });
      } else {
        const segmento = await SegmentosContatos.create({
          segmento,
          data_hora: Date.now(),
        });
        return res.json(segmento);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const segmento = await SegmentosContatos.findByPk(id);
      const { segmento } = req.body;

      segmento.segmento = segmento;

      const resultadoSegmento = await segmento.save();
      return res.json(resultadoSegmento);
    } catch (error) {
      return res.status(404).json({ error: "Segmento não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const segmento = await SegmentosContatos.findOne({
        where: {
          id,
        },
      });
      segmento.destroy();
      return res.json(segmento);
    } catch (error) {
      return res.status(404).json({ error: "Segmento não encontrado!" });
    }
  },
};
