'use strict';

let Light = require('../../Model/Light');
let Scene = require('../../Model/Scene');

const SCENE_ATTRIBUTE_MAP = {
  'id':                'id',
  'lights':            'lightIds',
  'name':              'name',
  'owner':             'owner',
  'recycle':           'recycle',
  'locked':            'locked',
  'appdata':           'appData',
  'picture':           'picture',
  'lastupdated':       'lastUpdated',
  'version':           'version',
  'transitiontime':    'transitionTime',
  'captureLightState': 'storelightstate',
};

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
    for (let key in result) {
      if (key in SCENE_ATTRIBUTE_MAP) {
        attributes[SCENE_ATTRIBUTE_MAP[key]] = result[key];
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
