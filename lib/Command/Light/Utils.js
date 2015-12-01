'use strict';

let Light = require('../../Model/Light');

let utils = {};

/**
 * Validate light
 *
 * @param {mixed} light Light object
 *
 * @return {bool} True if valid
 */
utils.validateLight = function (light) {
  if (light instanceof Light) {
    return true;
  }

  throw new Error({
    description: 'Expecting Light'
  });
};

module.exports = utils;
