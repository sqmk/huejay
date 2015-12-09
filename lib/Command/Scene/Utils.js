'use strict';

let Light = require('../../Model/Light');
let Scene = require('../../Model/Scene');

const SCENE_ATTRIBUTE_MAP = {
  'id':             'id',
  'name':           'name',
  'lights':         'lightIds',
  'transitiontime': 'transitionTime',
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
 * Build scene
 *
 * @param {Object} result Result
 *
 * @return {Scene} Scene
 */
utils.buildScene = function (result) {
  let attributes = this.mapSceneAttributes(result);

  return new Scene(attributes);
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

module.exports = utils;
