'use strict';

var utils = require('../utils/writer.js');
var Lead = require('../service/LeadService');

module.exports.leadCidadeLead_cidadeGET = function leadCidadeLead_cidadeGET (req, res, next, lead_cidade) {
  Lead.leadCidadeLead_cidadeGET(lead_cidade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadEmailLead_emailGET = function leadEmailLead_emailGET (req, res, next, lead_email) {
  Lead.leadEmailLead_emailGET(lead_email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadEstadoLead_estadoGET = function leadEstadoLead_estadoGET (req, res, next, lead_estado) {
  Lead.leadEstadoLead_estadoGET(lead_estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadFiltrarGET = function leadFiltrarGET (req, res, next, nome) {
  Lead.leadFiltrarGET(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadGET = function leadGET (req, res, next) {
  Lead.leadGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadGrupoGrl_nomeGET = function leadGrupoGrl_nomeGET (req, res, next, grl_nome) {
  Lead.leadGrupoGrl_nomeGET(grl_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadLead_idDELETE = function leadLead_idDELETE (req, res, next, lead_id) {
  Lead.leadLead_idDELETE(lead_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadLead_idGET = function leadLead_idGET (req, res, next, lead_id) {
  Lead.leadLead_idGET(lead_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadLocalizationLocalizationGET = function leadLocalizationLocalizationGET (req, res, next, localization) {
  Lead.leadLocalizationLocalizationGET(localization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadNomeLead_nomeGET = function leadNomeLead_nomeGET (req, res, next, lead_nome) {
  Lead.leadNomeLead_nomeGET(lead_nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadPOST = function leadPOST (req, res, next, body) {
  Lead.leadPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadPUT = function leadPUT (req, res, next, body) {
  Lead.leadPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadPaisLead_paisGET = function leadPaisLead_paisGET (req, res, next, lead_pais) {
  Lead.leadPaisLead_paisGET(lead_pais)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadRoleRoleGET = function leadRoleRoleGET (req, res, next, role) {
  Lead.leadRoleRoleGET(role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadSegmentSegmentGET = function leadSegmentSegmentGET (req, res, next, segment) {
  Lead.leadSegmentSegmentGET(segment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leadTituloLead_tituloGET = function leadTituloLead_tituloGET (req, res, next, lead_titulo) {
  Lead.leadTituloLead_tituloGET(lead_titulo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
