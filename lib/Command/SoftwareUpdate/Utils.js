'use strict';

let SoftwareUpdate = require('../../Model/SoftwareUpdate');

const SW_ATTRIBUTES = [
  'updatestate',
  'checkforupdate',
  'devicetypes',
  'url',
  'text',
  'notify'
];

let utils = {};

/**
 * Build software update
 *
 * @param {Object} result Result
 *
 * @return {SoftwareUpdate} Software update
 */
utils.buildSoftwareUpdate = function (result) {
  return new SoftwareUpdate(this.mapSoftwareUpdateAttributes(result));
};

/**
 * Map software update attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapSoftwareUpdateAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of SW_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
