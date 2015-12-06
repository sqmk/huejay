'use strict';

/**
 * Abstract light model
 */
class AbstractLightModel {
  /**
   * Constructor
   *
   * @param {Object} details Light model details
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
   * Get color gamut
   *
   * @return {string} Color gamut code
   */
  get colorGamut() {
    return this.details.colorGamut;
  }

  /**
   * Friends of Hue
   *
   * @return {bool} True if Friends of Hue, false if not
   */
  get friendsOfHue() {
    return Boolean(this.details.friendsOfHue);
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

module.exports = AbstractLightModel;
