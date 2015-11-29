'use strict';

/**
 * Attributes helper
 */
class Attributes {
  /**
   * Constructor
   *
   * @param {mixed} attributes Attributes (optional)
   */
  constructor(attributes) {
    this.attributes = Object.assign({}, attributes);
    this.changed    = {};
  }

  /**
   * Get attribute
   *
   * @param {string} attribute Attribute
   *
   * @return {mixed} Value
   */
  get(attribute) {
    return this.attributes[attribute];
  }

  /**
   * Set attribute to value
   *
   * @param {string} attribute Attribute
   * @param {mixed}  value     Value
   */
  set(attribute, value) {
    if (this.attributes[attribute] !== value) {
      this.attributes[attribute] = value;

      this.changed[attribute] = attribute;
    }

    this.attributes[attribute] = value;
  }

  /**
   * Get all attributes
   *
   * @return {Object} Attributes/values
   */
  getAll() {
    return this.attributes;
  }

  /**
   * Get changed attributes
   *
   * @return {Object} Changed attributes/values
   */
  getChanged() {
    let changed = {};

    for (let attribute in this.changed) {
      changed[attribute] = this.attributes[attribute];
    }

    return changed;
  }

  /**
   * Reset changed attributes
   */
  resetChanged() {
    this.changed = {};
  }
}

module.exports = Attributes;
