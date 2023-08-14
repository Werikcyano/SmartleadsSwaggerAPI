'use strict';

var utils = require('../utils/writer.js');
var ParmetrosDeBusca = require('../service/ParmetrosDeBuscaService');

module.exports.parametrobuscaPOST = function parametrobuscaPOST (req, res, next, body) {
  ParmetrosDeBusca.parametrobuscaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.parametrobuscaPUT = function parametrobuscaPUT (req, res, next, body) {
  ParmetrosDeBusca.parametrobuscaPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.parametrobuscaPab_idDELETE = function parametrobuscaPab_idDELETE (req, res, next, pab_id) {
  ParmetrosDeBusca.parametrobuscaPab_idDELETE(pab_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
