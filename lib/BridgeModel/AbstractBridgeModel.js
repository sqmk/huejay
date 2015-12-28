'use strict';

/**
 * Abstract bridge model
 */
class AbstractBridgeModel {
  /**
   * Constructor
   *
   * @param {Object} details Bridge model details
   */
  constructor(details) {
    this.details = Object.assign({}, details);
  }

  /**
   * Get id of model
   *
   * @return {string} Id
   */
  get id() {
    return this.details.id;
  }

  /**
   * Get manufacturer
   *
   * @return {string} Manufacturer
   */
  get manufacturer() {
    return this.details.manufacturer;
  }

  /**
   * Get name of model
   *
   * @return {string} Name
   */
  get name() {
    return this.details.name;
  }

  /**
   * To string
   *
   * @return {string} Name
   */
  toString() {
    return this.name;
  }
}

module.exports = AbstractBridgeModel;
