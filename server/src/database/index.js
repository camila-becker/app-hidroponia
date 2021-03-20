const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Contatos = require("../models/Contatos");
const Produtores = require("../models/Produtores");
const AtividadesProdutores = require("../models/AtividadesProdutores");
const AtividadesContatos = require("../models/AtividadesContatos");
const InteressesContatos = require("../models/InteressesContatos");
const SegmentosContatos = require("../models/SegmentosContatos");
const MetodoCultivo = require("../models/MetodoCultivo");

const conexao = new Sequelize(dbConfig);

Contatos.init(conexao);
Produtores.init(conexao);
AtividadesProdutores.init(conexao);
AtividadesContatos.init(conexao);
InteressesContatos.init(conexao);
SegmentosContatos.init(conexao);
MetodoCultivo.init(conexao);

module.exports = conexao;
