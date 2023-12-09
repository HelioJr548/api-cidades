const mongoose = require("mongoose");

const municipioSchema = new mongoose.Schema({
  "municipio-nome": String,
  "microrregiao-nome": String,
  "UF-sigla": String,
  "UF-nome": String,
  "regiao-nome": String
});

const Municipio = mongoose.model("municipio", municipioSchema);

module.exports = Municipio;
