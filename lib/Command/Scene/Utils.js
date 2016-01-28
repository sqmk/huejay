'use strict';

let Error = require('../../Error');
let Light = require('../../Model/Light');
let Scene = require('../../Model/Scene');

const SCENE_ATTRIBUTES = [
  'id',
  'lights',
  'name',
  'owner',
  'recycle',
  'locked',
  'appdata',
  'picture',
  'lastupdated',
  'version',
  'transitiontime',
  'storelightstate',
];

/**
 * Scene utils
 */
class Utils {
  /**
   * Validate scene
   *
   * @param {mixed} scene Scene object
   *
   * @return {bool} True if valid
   */
  static validateScene(scene) {
    if (scene instanceof Scene) {
      return true;
    }

    throw new Error({
      message: 'Expecting Scene'
    });
  }

  /**
   * Build scene
   *
   * @param {Object} result Result
   *
   * @return {Scene} Scene
   */
  static buildScene(result) {
    return new Scene(
      this.mapSceneAttributes(result),
      this.mapSceneLightStates(result)
    );
  }

  /**
   * Map scene attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapSceneAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of SCENE_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }

  /**
   * Map scene light states
   *
   * @param {Object} result Result
   *
   * @return {Object} Light states
   */
  static mapSceneLightStates(result) {
    let lightStates = {};

    if (result.lightstates !== undefined) {
      return Object.assign({}, result.lightstates);
    }

    return {};
  }
}

module.exports = Utils;
