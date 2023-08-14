'use strict';

var utils = require('../utils/writer.js');
var GruposDeLeads = require('../service/GruposDeLeadsService');

module.exports.grupoleadGET = function grupoleadGET (req, res, next) {
  GruposDeLeads.grupoleadGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoleadGrl_idDELETE = function grupoleadGrl_idDELETE (req, res, next, grl_id) {
  GruposDeLeads.grupoleadGrl_idDELETE(grl_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoleadGrl_idGET = function grupoleadGrl_idGET (req, res, next, grl_id) {
  GruposDeLeads.grupoleadGrl_idGET(grl_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoleadPOST = function grupoleadPOST (req, res, next) {
  GruposDeLeads.grupoleadPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grupoleadPUT = function grupoleadPUT (req, res, next) {
  GruposDeLeads.grupoleadPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
