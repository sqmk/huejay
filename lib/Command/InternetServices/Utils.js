'use strict';

let InternetServices = require('../../Model/InternetServices');

const INTERNET_SERVICES_ATTRIBUTES = [
  'internet',
  'remoteaccess',
  'time',
  'swupdate',
];

/**
 * Internet services utils
 */
class Utils {
  /**
   * Build internet services
   *
   * @param {Object} result Result
   *
   * @return {InternetServices} Internet services
   */
  static buildInternetServices(result) {
    return new InternetServices(
      this.mapInternetServicesAttributes(result)
    );
  }

  /**
   * Map internet services attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapInternetServicesAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of INTERNET_SERVICES_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }
}

module.exports = Utils;
