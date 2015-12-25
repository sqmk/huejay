'use strict';

let Bridge = require('../../Model/Bridge');
let Error  = require('../../Error');

const BRIDGE_ATTRIBUTE_MAP = {
  'bridgeid':         'id',
  'name':             'name',
  'modelid':          'modelId',
  'factorynew':       'factoryNew',
  'replacesbridgeid': 'replacesBridgeId',
  'zigbeechannel':    'zigbeeChannel',
  'apiversion':       'apiVersion',
  'swversion':        'softwareVersion',
  'mac':              'macAddress',
  'ipaddress':        'ipAddress',
  'dhcp':             'dhcp',
  'netmask':          'netmask',
  'gateway':          'gateway',
  'proxyaddress':     'proxyAddress',
  'proxyport':        'proxyPort',
  'UTC':              'utcTime',
  'localtime':        'localTime',
  'timezone':         'timeZone',
  'portalservices':   'portalServices',
  'portalconnection': 'portalConnection',
  'linkbutton':       'linkButton',
  'touchlink':        'touchlink',
};


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
    for (let key in result) {
      if (key in BRIDGE_ATTRIBUTE_MAP) {
        attributes[BRIDGE_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
