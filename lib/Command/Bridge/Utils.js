'use strict';

let Bridge = require('../../Model/Bridge');
let Error  = require('../../Error');

const BRIDGE_ATTRIBUTES = [
  'bridgeid',
  'name',
  'modelid',
  'factorynew',
  'replacesbridgeid',
  'zigbeechannel',
  'apiversion',
  'swversion',
  'mac',
  'ipaddress',
  'dhcp',
  'netmask',
  'gateway',
  'proxyaddress',
  'proxyport',
  'UTC',
  'localtime',
  'timezone',
  'portalservices',
  'portalconnection',
  'linkbutton',
  'touchlink',
];

let utils = {};

/**
 * Validate bridge
 *
 * @param {mixed} bridge Bridge object
 *
 * @return {bool} True if valid
 */
utils.validateBridge = function (bridge) {
  if (bridge instanceof Bridge) {
    return true;
  }

  throw new Error({
    description: 'Expecting Bridge'
  });
};

/**
 * Build bridge
 *
 * @param {Object} result Result
 *
 * @return {Bridge} Bridge
 */
utils.buildBridge = function (result) {
  return new Bridge(this.mapBridgeAttributes(result));
};

/**
 * Map bridge attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapBridgeAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of BRIDGE_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
