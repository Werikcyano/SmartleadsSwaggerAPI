'use strict';

var utils = require('../utils/writer.js');
var EmailsEmpresa = require('../service/EmailsEmpresaService');

module.exports.emailsempresaEmp_idDELETE = function emailsempresaEmp_idDELETE (req, res, next, emp_id) {
  EmailsEmpresa.emailsempresaEmp_idDELETE(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsempresaEmp_idGET = function emailsempresaEmp_idGET (req, res, next, emp_id) {
  EmailsEmpresa.emailsempresaEmp_idGET(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsempresaGET = function emailsempresaGET (req, res, next) {
  EmailsEmpresa.emailsempresaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsempresaPOST = function emailsempresaPOST (req, res, next, body) {
  EmailsEmpresa.emailsempresaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsempresaPUT = function emailsempresaPUT (req, res, next, body) {
  EmailsEmpresa.emailsempresaPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
