'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.emailsprovaveisGET = function emailsprovaveisGET (req, res, next) {
  Default.emailsprovaveisGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
