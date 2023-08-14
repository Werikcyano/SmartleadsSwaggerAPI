'use strict';

var utils = require('../utils/writer.js');
var ExperinciasNaEmpresa = require('../service/ExperinciasNaEmpresaService');

module.exports.experiencianaempresaEmp_idDELETE = function experiencianaempresaEmp_idDELETE (req, res, next, emp_id) {
  ExperinciasNaEmpresa.experiencianaempresaEmp_idDELETE(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiencianaempresaEmpresaEmp_idGET = function experiencianaempresaEmpresaEmp_idGET (req, res, next, emp_id) {
  ExperinciasNaEmpresa.experiencianaempresaEmpresaEmp_idGET(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiencianaempresaEne_idGET = function experiencianaempresaEne_idGET (req, res, next, ene_id) {
  ExperinciasNaEmpresa.experiencianaempresaEne_idGET(ene_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiencianaempresaGET = function experiencianaempresaGET (req, res, next) {
  ExperinciasNaEmpresa.experiencianaempresaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiencianaempresaPOST = function experiencianaempresaPOST (req, res, next) {
  ExperinciasNaEmpresa.experiencianaempresaPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiencianaempresaPUT = function experiencianaempresaPUT (req, res, next) {
  ExperinciasNaEmpresa.experiencianaempresaPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
