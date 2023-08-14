'use strict';

var utils = require('../utils/writer.js');
var GruposDeClientes = require('../service/GruposDeClientesService');

module.exports.grupoclienteGET = function grupoclienteGET (req, res, next) {
  GruposDeClientes.grupoclienteGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoclienteGrc_idDELETE = function grupoclienteGrc_idDELETE (req, res, next, grc_id) {
  GruposDeClientes.grupoclienteGrc_idDELETE(grc_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoclienteGrc_idGET = function grupoclienteGrc_idGET (req, res, next, grc_id) {
  GruposDeClientes.grupoclienteGrc_idGET(grc_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoclientePOST = function grupoclientePOST (req, res, next) {
  GruposDeClientes.grupoclientePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoclientePUT = function grupoclientePUT (req, res, next) {
  GruposDeClientes.grupoclientePUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
