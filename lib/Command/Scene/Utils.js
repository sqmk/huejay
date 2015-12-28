'use strict';

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

let utils = {};

/**
 * Validate scene
 *
 * @param {mixed} scene Scene object
 *
 * @return {bool} True if valid
 */
utils.validateScene = function (scene) {
  if (scene instanceof Scene) {
    return true;
  }

  throw new Error({
    description: 'Expecting Scene'
  });
}

/**
 * Build scene
 *
 * @param {Object} result Result
 *
 * @return {Scene} Scene
 */
utils.buildScene = function (result) {
  let attributes  = this.mapSceneAttributes(result);
  let lightStates = this.mapSceneLightStates(result);

  return new Scene(attributes, lightStates);
};

/**
 * Map scene attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapSceneAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key of SCENE_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }
  }

  return attributes;
};

/**
 * Map scene light states
 *
 * @param {Object} result Result
 *
 * @return {Object} Light states
 */
utils.mapSceneLightStates = function (result) {
  let lightStates = {};

  if (result.lightstates !== undefined) {
    return Object.assign({}, result.lightstates);
  }

  return {};
};

module.exports = utils;
