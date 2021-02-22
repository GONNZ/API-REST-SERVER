const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const {q, nombre="no envio", apikey} = req.query;

  res.status(200).json({
    msg: "GET API desde controlador",
    q,nombre,apikey
  });
};

const usuariosPost = (req, res = response) => {
  const { dev, data } = req.body;

  res.status(200).json({
    msg: "POST API desde controlador",
    dev,
    data,
  });
};
const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.status(200).json({
    msg: "PUT API desde controlador",
    id
  });
};
const usuariosDelete = (req, res = response) => {
  res.status(200).json({
    msg: "DELETE API desde controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
