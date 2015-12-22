'use strict';

/**
 * Abstract sensor model
 */
class AbstractSensorModel {
  /**
   * Constructor
   *
   * @param {Object} details Sensor model details
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
   * Get type
   *
   * @return {string} Type
   */
  get type() {
    return this.details.type;
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

module.exports = AbstractSensorModel;
