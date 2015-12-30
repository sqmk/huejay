'use strict';

let Error = require('../../Error');
let Group = require('../../Model/Group');

const GROUP_ATTRIBUTES = [
  'id',
  'name',
  'type',
  'class',
  'lights',
  'modelid',
  'uniqueid'
];

const GROUP_STATE_ATTRIBUTES = [
  'on',
  'bri',
  'colormode',
  'hue',
  'sat',
  'xy',
  'ct',
  'transitiontime',
  'alert',
  'effect',
  'scene'
];

let utils = {};

/**
 * Validate group
 *
 * @param {mixed} group Group object
 *
 * @return {bool} True if valid
 */
utils.validateGroup = function (group) {
  if (group instanceof Group) {
    return true;
  }

  throw new Error({
    description: 'Expecting Group'
  });
};

/**
 * Build group
 *
 * @param {Object} result Result
 *
 * @return {Group} Group
 */
utils.buildGroup = function (result) {
  let attributes = this.mapGroupAttributes(result);
  let state      = this.mapGroupState(result.action);

  return new Group(attributes, state);
};

/**
 * Map group attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapGroupAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of GROUP_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

/**
 * Map group state
 *
 * @param {Object} result Result
 *
 * @return {Object} State
 */
utils.mapGroupState = function (result) {
  let state = {};

  if (result !== undefined) {
    for (let key of GROUP_STATE_ATTRIBUTES) {
      if (key in result) {
        state[key] = result[key];
      }
    }
  }

  return state;
};

module.exports = utils;
