const express = require('express');
const router = express.Router();
const Municipio = require('./municipioModel');


router.get('/:estado', async (req, res) => {
  try {
    const estado = req.params.estado;
    const municipio = await Municipio.find({ estado });
    res.json(municipio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:nome', async (req, res) => {
  try {
    const nome = req.params.nome;
    const municipio = await Municipio.findOne({ nome });
    if (!municipio) {
      return res.status(404).json({ message: 'Municipio não encontrada' });
    }
    res.json(municipio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;