'use strict';

let User = require('../../Model/User');

const USER_ATTRIBUTE_MAP = {
  'username':      'username',
  'name':          'deviceType',
  'create date':   'createDate',
  'last use date': 'lastUseDate',
};

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
    for (let key in result) {
      if (key in USER_ATTRIBUTE_MAP) {
        attributes[USER_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

module.exports = utils;
