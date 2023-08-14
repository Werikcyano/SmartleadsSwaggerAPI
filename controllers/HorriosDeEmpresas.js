'use strict';

var utils = require('../utils/writer.js');
var HorriosDeEmpresas = require('../service/HorriosDeEmpresasService');

module.exports.horariosempresaEmp_idDELETE = function horariosempresaEmp_idDELETE (req, res, next, emp_id) {
  HorriosDeEmpresas.horariosempresaEmp_idDELETE(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosempresaEmp_idGET = function horariosempresaEmp_idGET (req, res, next, emp_id) {
  HorriosDeEmpresas.horariosempresaEmp_idGET(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosempresaGET = function horariosempresaGET (req, res, next) {
  HorriosDeEmpresas.horariosempresaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosempresaPOST = function horariosempresaPOST (req, res, next) {
  HorriosDeEmpresas.horariosempresaPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosempresaPUT = function horariosempresaPUT (req, res, next) {
  HorriosDeEmpresas.horariosempresaPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
