'use strict';

let Bridge = require('../../Model/Bridge');
let Error  = require('../../Error');

const BRIDGE_ATTRIBUTES = [
  'bridgeid',
  'name',
  'modelid',
  'factorynew',
  'replacesbridgeid',
  'datastoreversion',
  'starterkitid',
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

/**
 * Bridge utils
 */
class Utils {
  /**
   * Validate bridge
   *
   * @param {mixed} bridge Bridge object
   *
   * @return {bool} True if valid
   */
  static validateBridge(bridge) {
    if (bridge instanceof Bridge) {
      return true;
    }

    throw new Error({
      message: 'Expecting Bridge'
    });
  }

  /**
   * Build bridge
   *
   * @param {Object} result Result
   *
   * @return {Bridge} Bridge
   */
  static buildBridge(result) {
    return new Bridge(
      this.mapBridgeAttributes(result)
    );
  }

  /**
   * Map bridge attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapBridgeAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of BRIDGE_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }
}

module.exports = Utils;
