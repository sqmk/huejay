'use strict';

let Light = require('../../Model/Light');

const LIGHT_ATTRIBUTES = [
  'id',
  'name',
  'type',
  'uniqueid',
  'manufacturername',
  'modelid',
  'swversion'
];

const LIGHT_STATE_ATTRIBUTES = [
  'on',
  'reachable',
  'bri',
  'colormode',
  'hue',
  'sat',
  'xy',
  'ct',
  'transitiontime',
  'alert',
  'effect'
];

let utils = {};

/**
 * Validate light
 *
 * @param {mixed} light Light object
 *
 * @return {bool} True if valid
 */
utils.validateLight = function (light) {
  if (light instanceof Light) {
    return true;
  }

  throw new Error({
    description: 'Expecting Light'
  });
};

/**
 * Build light
 *
 * @param {Object} result Result
 *
 * @return {Light} Light
 */
utils.buildLight = function (result) {
  let attributes = this.mapLightAttributes(result);
  let state      = this.mapLightState(result.state);

  return new Light(attributes, state);
};

/**
 * Map light attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapLightAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of LIGHT_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

/**
 * Map light state
 *
 * @param {Object} result Result
 *
 * @return {Object} State
 */
utils.mapLightState = function (result) {
  let state = {};

  if (result !== undefined) {
    for (let key of LIGHT_STATE_ATTRIBUTES) {
      if (key in result) {
        state[key] = result[key];
      }
    }
  }

  return state;
};

module.exports = utils;
