'use strict';

/**
 * Abstract capability model
 */
class AbstractCapabilityModel {
  /**
   * Constructor
   *
   * @param {Object} details Capability model details
   */
  constructor(details) {
    this.details = Object.assign({}, details);
  }

  /**
   * Available
   *
   * @param {int} Available
   */
  get available() {
    return this.details.available;
  }
}

module.exports = AbstractCapabilityModel;