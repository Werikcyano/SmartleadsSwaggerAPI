'use strict';

var utils = require('../utils/writer.js');
var Cliente = require('../service/ClienteService');

module.exports.clienteCli_idDELETE = function clienteCli_idDELETE (req, res, next, cli_id) {
  Cliente.clienteCli_idDELETE(cli_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteCli_idGET = function clienteCli_idGET (req, res, next, cli_id) {
  Cliente.clienteCli_idGET(cli_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteEmailCli_emailGET = function clienteEmailCli_emailGET (req, res, next, cli_email) {
  Cliente.clienteEmailCli_emailGET(cli_email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteFiltrarGET = function clienteFiltrarGET (req, res, next) {
  Cliente.clienteFiltrarGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteGET = function clienteGET (req, res, next) {
  Cliente.clienteGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteGrupoGrc_nomeGET = function clienteGrupoGrc_nomeGET (req, res, next, grc_nome) {
  Cliente.clienteGrupoGrc_nomeGET(grc_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteLoginCli_loginGET = function clienteLoginCli_loginGET (req, res, next, cli_login) {
  Cliente.clienteLoginCli_loginGET(cli_login)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clienteLoginCli_nomeGET = function clienteLoginCli_nomeGET (req, res, next, cli_nome) {
  Cliente.clienteLoginCli_nomeGET(cli_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientePOST = function clientePOST (req, res, next, body) {
  Cliente.clientePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientePUT = function clientePUT (req, res, next, body) {
  Cliente.clientePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
