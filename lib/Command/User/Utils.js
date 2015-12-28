'use strict';

let User = require('../../Model/User');

const USER_ATTRIBUTES = [
  'username',
  'name',
  'create date',
  'last use date',
];

let utils = {};

/**
 * Validate user
 *
 * @param {mixed} user User object
 *
 * @return {bool} True if valid
 */
utils.validateUser = function (user) {
  if (user instanceof User) {
    return true;
  }

  throw new Error({
    description: 'Expecting User'
  });
};

/**
 * Build user
 *
 * @param {Object} result Result
 *
 * @return {User} User
 */
utils.buildUser = function (result) {
  return new User(this.mapUserAttributes(result));
};

/**
 * Map user attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapUserAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of USER_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
