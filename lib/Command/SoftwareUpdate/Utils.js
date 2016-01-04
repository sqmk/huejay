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

/**
 * Software update utils
 */
class Utils {
  /**
   * Build software update
   *
   * @param {Object} result Result
   *
   * @return {SoftwareUpdate} Software update
   */
  static buildSoftwareUpdate(result) {
    return new SoftwareUpdate(
      this.mapSoftwareUpdateAttributes(result)
    );
  }

  /**
   * Map software update attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapSoftwareUpdateAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of SW_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }
}

module.exports = Utils;
