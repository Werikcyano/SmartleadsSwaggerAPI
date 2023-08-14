'use strict';

var utils = require('../utils/writer.js');
var Formaes = require('../service/FormaesService');

module.exports.formacaoGET = function formacaoGET (req, res, next) {
  Formaes.formacaoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.formacaoLead_idDELETE = function formacaoLead_idDELETE (req, res, next, lead_id) {
  Formaes.formacaoLead_idDELETE(lead_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.formacaoLead_idGET = function formacaoLead_idGET (req, res, next, lead_id) {
  Formaes.formacaoLead_idGET(lead_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.formacaoPOST = function formacaoPOST (req, res, next) {
  Formaes.formacaoPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.formacaoPUT = function formacaoPUT (req, res, next) {
  Formaes.formacaoPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
