'use strict';

let Portal = require('../../Model/Portal');

const PORTAL_ATTRIBUTES = [
  'signedon',
  'incoming',
  'outgoing',
  'communication',
];

let utils = {};

/**
 * Build portal
 *
 * @param {Object} result Result
 *
 * @return {Portal} Portal
 */
utils.buildPortal = function (result) {
  return new Portal(this.mapPortalAttributes(result));
};

/**
 * Map portal attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapPortalAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of PORTAL_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
