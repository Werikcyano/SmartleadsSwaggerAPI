'use strict';

var utils = require('../utils/writer.js');
var Empresas = require('../service/EmpresasService');

module.exports.empresaCargonaempresaCne_nomeGET = function empresaCargonaempresaCne_nomeGET (req, res, next, cne_nome) {
  Empresas.empresaCargonaempresaCne_nomeGET(cne_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaEmp_idGET = function empresaEmp_idGET (req, res, next, emp_id) {
  Empresas.empresaEmp_idGET(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaEspecializacaoEsp_nomeGET = function empresaEspecializacaoEsp_nomeGET (req, res, next, esp_nome) {
  Empresas.empresaEspecializacaoEsp_nomeGET(esp_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaExperiencianaempresaEne_nomeGET = function empresaExperiencianaempresaEne_nomeGET (req, res, next, ene_nome) {
  Empresas.empresaExperiencianaempresaEne_nomeGET(ene_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaFiltrarEGET = function empresaFiltrarEGET (req, res, next) {
  Empresas.empresaFiltrarEGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaFiltrarOuGET = function empresaFiltrarOuGET (req, res, next) {
  Empresas.empresaFiltrarOuGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaGET = function empresaGET (req, res, next) {
  Empresas.empresaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaHorariosempresaEmp_idGET = function empresaHorariosempresaEmp_idGET (req, res, next, emp_id) {
  Empresas.empresaHorariosempresaEmp_idGET(emp_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaNomeEmp_nomeGET = function empresaNomeEmp_nomeGET (req, res, next, emp_nome) {
  Empresas.empresaNomeEmp_nomeGET(emp_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaPOST = function empresaPOST (req, res, next, body) {
  Empresas.empresaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaPUT = function empresaPUT (req, res, next, body) {
  Empresas.empresaPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaSegmentoEmp_segmentoGET = function empresaSegmentoEmp_segmentoGET (req, res, next, emp_segmento) {
  Empresas.empresaSegmentoEmp_segmentoGET(emp_segmento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresaSetorEmp_setorGET = function empresaSetorEmp_setorGET (req, res, next, emp_setor) {
  Empresas.empresaSetorEmp_setorGET(emp_setor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
