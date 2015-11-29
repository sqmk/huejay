'use strict';

let Attributes = require('./Attributes');

const DEFAULT_ATTRIBUTES = {
  deviceType: 'huejay'
};

/**
 * User
 *
 * User object
 */
class User {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
  }

  /**
   * Get username
   *
   * @return {string} Username
   */
  get username() {
    return this.attributes.get('username');
  }

  /**
   * Get device type
   *
   * @return {string} Device type
   */
  get deviceType() {
    return this.attributes.get('deviceType');
  }

  /**
   * Set device type
   *
   * @param {string} type Type
   */
  set deviceType(type) {
    return this.attributes.set('deviceType', type);
  }

  /**
   * Get create date
   *
   * @return {string} Create date
   */
  get createDate() {
    return this.attributes.get('createDate');
  }

  /**
   * Get last use date
   *
   * @return {string} Date
   */
  get lastUseDate() {
    return this.attributes.get('lastUseDate');
  }

  /**
   * To string
   *
   * @return {string} Username
   */
  toString() {
    return this.username;
  }
}

module.exports = User;
