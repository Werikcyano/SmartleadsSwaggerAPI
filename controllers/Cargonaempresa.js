'use strict';

var utils = require('../utils/writer.js');
var Cargonaempresa = require('../service/CargonaempresaService');

module.exports.cargonaempresaGET = function cargonaempresaGET (req, res, next) {
  Cargonaempresa.cargonaempresaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
