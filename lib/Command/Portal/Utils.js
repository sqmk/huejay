'use strict';

let Portal = require('../../Model/Portal');

const PORTAL_ATTRIBUTE_MAP = {
  'signedon':      'signedOn',
  'incoming':      'incoming',
  'outgoing':      'outgoing',
  'communication': 'communication'
};

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
    for (let key in result) {
      if (key in PORTAL_ATTRIBUTE_MAP) {
        attributes[PORTAL_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
