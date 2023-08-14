'use strict';


/**
 * Obter lead por cidade
 *
 * lead_cidade String Nome da cidade do lead
 * returns List
 **/
exports.leadCidadeLead_cidadeGET = function(lead_cidade) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lead por e-mail
 *
 * lead_email String E-mail do lead
 * returns List
 **/
exports.leadEmailLead_emailGET = function(lead_email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lead por estado
 *
 * lead_estado String Estado do lead
 * returns List
 **/
exports.leadEstadoLead_estadoGET = function(lead_estado) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Filtrar leads
 *
 * nome String Nome do lead (optional)
 * returns List
 **/
exports.leadFiltrarGET = function(nome) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter todos os leads
 *
 * returns List
 **/
exports.leadGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter leads por nome de grupo
 *
 * grl_nome String Nome do grupo
 * returns List
 **/
exports.leadGrupoGrl_nomeGET = function(grl_nome) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Excluir lead por ID
 *
 * lead_id Long ID do lead
 * returns Message
 **/
exports.leadLead_idDELETE = function(lead_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lead por ID
 *
 * lead_id Long ID do lead
 * returns Lead
 **/
exports.leadLead_idGET = function(lead_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter leads por localização
 *
 * localization String Localização do lead
 * returns List
 **/
exports.leadLocalizationLocalizationGET = function(localization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lead por nome
 *
 * lead_nome String Nome do lead
 * returns List
 **/
exports.leadNomeLead_nomeGET = function(lead_nome) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Inserir novo lead
 *
 * body LeadCreate 
 * returns Message
 **/
exports.leadPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar lead
 *
 * body LeadUpdate 
 * returns Message
 **/
exports.leadPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lead por país
 *
 * lead_pais String País do lead
 * returns List
 **/
exports.leadPaisLead_paisGET = function(lead_pais) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter leads por papel
 *
 * role String Papel do lead
 * returns List
 **/
exports.leadRoleRoleGET = function(role) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter leads por segmento
 *
 * segment String Segmento do lead
 * returns List
 **/
exports.leadSegmentSegmentGET = function(segment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lead por título
 *
 * lead_titulo String Título do lead
 * returns List
 **/
exports.leadTituloLead_tituloGET = function(lead_titulo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
}, {
  "lead_titulo" : "lead_titulo",
  "lead_estado" : "lead_estado",
  "lead_nome" : "lead_nome",
  "lead_cidade" : "lead_cidade",
  "lead_pais" : "lead_pais",
  "lead_id" : "lead_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

