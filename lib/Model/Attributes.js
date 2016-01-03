'use strict';

/**
 * Attributes helper
 */
class Attributes {
  /**
   * Constructor
   *
   * @param {mixed} attributes Attributes (optional)
   * @param {mixed} defaults   Default attributes (optional)
   */
  constructor(attributes, defaults) {
    this.replace(Object.assign({}, defaults, attributes));
    this.resetChanged();
  }

  /**
   * Replace attributes
   *
   * @param {mixed} attributes Attributes
   */
  replace(attributes) {
    this.attributes = Object.assign({}, this.attributes, attributes);
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
   * Get all attributes
   *
   * @return {Object} Attributes/values
   */
  getAll() {
    return Object.assign({}, this.attributes);
  }

  /**
   * Set attribute to value
   *
   * @param {string} attribute Attribute
   * @param {mixed}  value     Value
   */
  set(attribute, value) {
    this.attributes[attribute] = value;

    this.changed[attribute] = attribute;
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
