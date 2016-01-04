'use strict';

let Portal = require('../../Model/Portal');

const PORTAL_ATTRIBUTES = [
  'signedon',
  'incoming',
  'outgoing',
  'communication',
];

/**
 * Portal utils
 */
class Utils {
  /**
   * Build portal
   *
   * @param {Object} result Result
   *
   * @return {Portal} Portal
   */
  static buildPortal(result) {
    return new Portal(
      this.mapPortalAttributes(result)
    );
  }

  /**
   * Map portal attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapPortalAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of PORTAL_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }
}

module.exports = Utils;
