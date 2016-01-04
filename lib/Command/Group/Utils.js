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

/**
 * Group utils
 */
class Utils {
  /**
   * Validate group
   *
   * @param {mixed} group Group object
   *
   * @return {bool} True if valid
   */
  static validateGroup(group) {
    if (group instanceof Group) {
      return true;
    }

    throw new Error({
      message: 'Expecting Group'
    });
  }

  /**
   * Build group
   *
   * @param {Object} result Result
   *
   * @return {Group} Group
   */
  static buildGroup(result) {
    return new Group(
      this.mapGroupAttributes(result),
      this.mapGroupState(result.action)
    );
  }

  /**
   * Map group attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapGroupAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of GROUP_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }

  /**
   * Map group state
   *
   * @param {Object} result Result
   *
   * @return {Object} State
   */
  static mapGroupState(result) {
    let state = {};

    if (result === undefined) {
      return state;
    }

    for (let key of GROUP_STATE_ATTRIBUTES) {
      if (key in result) {
        state[key] = result[key];
      }
    }

    return state;
  }
}

module.exports = Utils;
