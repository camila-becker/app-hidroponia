const express = require("express");
const routes = express.Router();

const ContatosController = require("./controllers/ContatosController");
const ProdutoresController = require("./controllers/ProdutoresController");
const AtividadesContatosController = require("./controllers/AtividadesContatosController");
const AtividadesProdutoresController = require("./controllers/AtividadesProdutoresController");
const InteressesContatosController = require("./controllers/InteressesContatosController");
const MetodoCultivoController = require("./controllers/MetodoCultivoController");
const SegmentosContatosController = require("./controllers/SegmentosContatosController");
const Cultivares = require("./controllers/CultivaresController");

routes.get("/api/contatos", ContatosController.index);
routes.get("/api/contatos/:id", ContatosController.getById);
routes.post("/api/contatos", ContatosController.store);
routes.put("/api/contatos/:id", ContatosController.update);
routes.delete("/api/contatos/:id", ContatosController.delete);

routes.get("/api/produtores", ProdutoresController.index);
routes.get("/api/produtores/:id", ProdutoresController.getById);
routes.post("/api/produtores", ProdutoresController.store);
routes.put("/api/produtores/:id", ProdutoresController.update);
routes.delete("/api/produtores/:id", ProdutoresController.delete);

routes.get("/api/atividades-contatos", AtividadesContatosController.index);
routes.get(
  "/api/atividades-contatos/:id",
  AtividadesContatosController.getById
);
routes.post("/api/atividades-contatos", AtividadesContatosController.store);
routes.put("/api/atividades-contatos/:id", AtividadesContatosController.update);
routes.delete(
  "/api/atividades-contatos/:id",
  AtividadesContatosController.delete
);

routes.get("/api/atividades-produtores", AtividadesProdutoresController.index);
routes.get(
  "/api/atividades-produtores/:id",
  AtividadesProdutoresController.getById
);
routes.post("/api/atividades-produtores", AtividadesProdutoresController.store);
routes.put(
  "/api/atividades-produtores/:id",
  AtividadesProdutoresController.update
);
routes.delete(
  "/api/atividades-produtores/:id",
  AtividadesProdutoresController.delete
);

routes.get("/api/interesses-contatos", InteressesContatosController.index);
routes.get(
  "/api/interesses-contatos/:id",
  InteressesContatosController.getById
);
routes.post("/api/interesses-contatos", InteressesContatosController.store);
routes.put("/api/interesses-contatos/:id", InteressesContatosController.update);
routes.delete(
  "/api/interesses-contatos/:id",
  InteressesContatosController.delete
);

routes.get("/api/metodo-cultivo", MetodoCultivoController.index);
routes.get("/api/metodo-cultivo/:id", MetodoCultivoController.getById);
routes.post("/api/metodo-cultivo", MetodoCultivoController.store);
routes.put("/api/metodo-cultivo/:id", MetodoCultivoController.update);
routes.delete("/api/metodo-cultivo/:id", MetodoCultivoController.delete);

routes.get("/api/segmentos-contatos", SegmentosContatosController.index);
routes.get("/api/segmentos-contatos/:id", SegmentosContatosController.getById);
routes.post("/api/segmentos-contatos", SegmentosContatosController.store);
routes.put("/api/segmentos-contatos/:id", SegmentosContatosController.update);
routes.delete(
  "/api/segmentos-contatos/:id",
  SegmentosContatosController.delete
);

routes.get("/api/cultivares", Cultivares.index);
routes.get("/api/cultivares/:id", Cultivares.getById);
routes.post("/api/cultivares", Cultivares.store);
routes.put("/api/cultivares/:id", Cultivares.update);
routes.delete("/api/cultivares/:id", Cultivares.delete);

module.exports = routes;
