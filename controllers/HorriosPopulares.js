'use strict';

var utils = require('../utils/writer.js');
var HorriosPopulares = require('../service/HorriosPopularesService');

module.exports.horariospopularesGET = function horariospopularesGET (req, res, next) {
  HorriosPopulares.horariospopularesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
