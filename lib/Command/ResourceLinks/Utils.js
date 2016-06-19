'use strict';

let Error        = require('../../Error');
let ResourceLink = require('../../Model/ResourceLink');

const RESOURCE_LINK_ATTRIBUTES = [
  'id',
  'name',
  'description',
  'type',
  'classid',
  'owner',
  'recycle',
  'links'
];

/**
 * Resource link utils
 */
class Utils {
  /**
   * Validate resource link
   *
   * @param {mixed} resourceLink ResourceLink object
   *
   * @return {bool} True if valid
   */
  static validateResourceLink(resourceLink) {
    if (resourceLink instanceof ResourceLink) {
      return true;
    }

    throw new Error({
      message: 'Expecting Resource Link'
    });
  }

  /**
   * Build resource link
   *
   * @param {Object} result Result
   *
   * @return {ResourceLink} Resource link
   */
  static buildResourceLink(result) {
    return new ResourceLink(
      this.mapResourceLinkAttributes(result)
    );
  }

  /**
   * Map resource link attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapResourceLinkAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of RESOURCE_LINK_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }
}

module.exports = Utils;
