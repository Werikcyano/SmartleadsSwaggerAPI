'use strict';

var utils = require('../utils/writer.js');
var ContasLinkedInAdmin = require('../service/ContasLinkedInAdminService');

module.exports.contaslinkedinadminCnl_idDELETE = function contaslinkedinadminCnl_idDELETE (req, res, next, cnl_id) {
  ContasLinkedInAdmin.contaslinkedinadminCnl_idDELETE(cnl_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contaslinkedinadminCnl_idGET = function contaslinkedinadminCnl_idGET (req, res, next, cnl_id) {
  ContasLinkedInAdmin.contaslinkedinadminCnl_idGET(cnl_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contaslinkedinadminGET = function contaslinkedinadminGET (req, res, next) {
  ContasLinkedInAdmin.contaslinkedinadminGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contaslinkedinadminPOST = function contaslinkedinadminPOST (req, res, next, body) {
  ContasLinkedInAdmin.contaslinkedinadminPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contaslinkedinadminPUT = function contaslinkedinadminPUT (req, res, next, body) {
  ContasLinkedInAdmin.contaslinkedinadminPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
