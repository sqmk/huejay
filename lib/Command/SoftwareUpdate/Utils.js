'use strict';

let SoftwareUpdate = require('../../Model/SoftwareUpdate');

const SW_ATTRIBUTE_MAP = {
  'updatestate':    'updateState',
  'checkforupdate': 'checkingEnabled',
  'devicetypes':    'deviceTypes',
  'url':            'releaseUrl',
  'text':           'releaseNotes',
  'notify':         'installNotification',
};

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
    for (let key in result) {
      if (key in SW_ATTRIBUTE_MAP) {
        attributes[SW_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
