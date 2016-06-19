'use strict';

let Error = require('../../Error');
let Light = require('../../Model/Light');

const LIGHT_ATTRIBUTES = [
  'id',
  'name',
  'type',
  'uniqueid',
  'manufacturername',
  'modelid',
  'productid',
  'swversion',
  'swconfigid'
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

/**
 * Light utils
 */
class Utils {
  /**
   * Validate light
   *
   * @param {mixed} light Light object
   *
   * @return {bool} True if valid
   */
  static validateLight(light) {
    if (light instanceof Light) {
      return true;
    }

    throw new Error({
      message: 'Expecting Light'
    });
  }

  /**
   * Build light
   *
   * @param {Object} result Result
   *
   * @return {Light} Light
   */
  static buildLight(result) {
    return new Light(
      this.mapLightAttributes(result),
      this.mapLightState(result.state)
    );
  }

  /**
   * Map light attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapLightAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of LIGHT_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }

  /**
   * Map light state
   *
   * @param {Object} result Result
   *
   * @return {Object} State
   */
  static mapLightState(result) {
    let state = {};

    if (result === undefined) {
      return state;
    }

    for (let key of LIGHT_STATE_ATTRIBUTES) {
      if (key in result) {
        state[key] = result[key];
      }
    }

    return state;
  }
}

module.exports = Utils;
