'use strict';

let Error = require('../../Error');
let User  = require('../../Model/User');

const USER_ATTRIBUTES = [
  'username',
  'name',
  'create date',
  'last use date',
];

/**
 * User utils
 */
class Utils {
  /**
   * Validate user
   *
   * @param {mixed} user User object
   *
   * @return {bool} True if valid
   */
  static validateUser(user) {
    if (user instanceof User) {
      return true;
    }

    throw new Error({
      message: 'Expecting User'
    });
  }

  /**
   * Build user
   *
   * @param {Object} result Result
   *
   * @return {User} User
   */
  static buildUser(result) {
    return new User(
      this.mapUserAttributes(result)
    );
  }

  /**
   * Map user attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapUserAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of USER_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }
}

module.exports = Utils;
