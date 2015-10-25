'use strict';

const ATTRIBUTE_MAP = {
  'username':      'username',
  'name':          'deviceType',
  'create date':   'createDate',
  'last use date': 'lastUseDate',
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
  constructor(username, attributes) {
    attributes.username = username;

    this.setAttributes(attributes);
    this.resetChanged();
  }

  /**
   * Set attributes
   *
   * @param {Object} attributes Attributes
   */
  setAttributes(attributes) {
    this.attributes = {};

    for (let key in attributes) {
      let attributeKey = key;
      if (key in ATTRIBUTE_MAP) {
        this.attributes[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }
  }

  /**
   * Get username
   *
   * @return {string} Username
   */
  get username() {
    return this.attributes.username;
  }

  /**
   * Get device type
   *
   * @return {string} Get device type
   */
  get deviceType() {
    return this.attributes.deviceType;
  }

  /**
   * Get create date
   *
   * @return {string} Create date
   */
  get createDate() {
    return this.attributes.createDate;
  }

  /**
   * Get last use date
   *
   * @return {string} Date
   */
  get lastUseDate() {
    return this.attributes.lastUseDate;
  }

  /**
   * Reset changed to nothing
   */
  resetChanged() {
    this.changed = [];
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
