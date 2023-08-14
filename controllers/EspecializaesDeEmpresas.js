'use strict';

var utils = require('../utils/writer.js');
var EspecializaesDeEmpresas = require('../service/EspecializaesDeEmpresasService');

module.exports.especializacaoempresaEmp_idDELETE = function especializacaoempresaEmp_idDELETE (req, res, next, emp_id) {
  EspecializaesDeEmpresas.especializacaoempresaEmp_idDELETE(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.especializacaoempresaEmp_idGET = function especializacaoempresaEmp_idGET (req, res, next, emp_id) {
  EspecializaesDeEmpresas.especializacaoempresaEmp_idGET(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.especializacaoempresaGET = function especializacaoempresaGET (req, res, next) {
  EspecializaesDeEmpresas.especializacaoempresaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.especializacaoempresaPOST = function especializacaoempresaPOST (req, res, next) {
  EspecializaesDeEmpresas.especializacaoempresaPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.especializacaoempresaPUT = function especializacaoempresaPUT (req, res, next) {
  EspecializaesDeEmpresas.especializacaoempresaPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
