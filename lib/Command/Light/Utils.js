'use strict';

let Light = require('../../Model/Light');

const LIGHT_ATTRIBUTE_MAP = {
  'id':               'id',
  'name':             'name',
  'type':             'type',
  'uniqueid':         'uniqueId',
  'manufacturername': 'manufacturer',
  'modelid':          'modelId',
  'swversion':        'softwareVersion',
};

const LIGHT_STATE_MAP = {
  'on':             'on',
  'reachable':      'reachable',
  'bri':            'brightness',
  'colormode':      'colorMode',
  'hue':            'hue',
  'sat':            'saturation',
  'xy':             'xy',
  'ct':             'colorTemp',
  'transitiontime': 'transitionTime',
  'alert':          'alert',
  'effect':         'effect',
};

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
  let state      = this.mapLightState(result);

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
    for (let key in result) {
      if (key in LIGHT_ATTRIBUTE_MAP) {
        attributes[LIGHT_ATTRIBUTE_MAP[key]] = result[key];
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

  if (result.state !== undefined) {
    for (let key in result.state) {
      if (key in LIGHT_STATE_MAP) {
        state[LIGHT_STATE_MAP[key]] = result.state[key];
      }
    }
  }

  return state;
};

module.exports = utils;
