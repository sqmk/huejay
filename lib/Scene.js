'use strict';

let Error = require('./Error');

const ATTRIBUTE_MAP = {
  'id':             'id',
  'name':           'name',
  'lights':         'lights',
  'transitiontime': 'transitionTime',
};

/**
 * Scene
 *
 * Scene object
 */
class Scene {
  /**
   * Constructor
   *
   * @param {string} id         Scene Id
   * @param {Object} attributes Attributes
   */
  constructor(id, attributes) {
    this.setAttributes(attributes);

    this.id = id;
  }

  /**
   * Validate scene
   *
   * @param {Scene} scene Scene
   */
  static validateScene(scene) {
    validateScene(scene);
  }

  /**
   * Get id
   *
   * @return {string} Id
   */
  get id() {
    return this.attributes.id;
  }

  /**
   * Set id
   *
   * @param {string} id Id
   */
  set id(id) {
    this.attributes.id = String(id);
  }

  /**
   * Get name
   *
   * @return {string} Name
   */
  get name() {
    return this.attributes.name;
  }

  /**
   * Set name
   *
   * @param {string} name Name
   */
  set name(name) {
    this.attributes.name = String(name);
  }

  /**
   * Get lights
   *
   * @return {array} List of light ids
   */
  get lights() {
    return this.attributes.lights;
  }

  /**
   * Set lights
   *
   * @param {array} lights List of light ids or Light objects
   */
  set lights(lights) {
    this.attributes.lights = [];

    for (let i in lights) {
      this.attributes.lights.push(String(lights[i]));
    }
  }

  /**
   * Get transition time
   *
   * @return {null} null
   */
  get transitionTime() {
    return null;
  }

  /**
   * Set transition time
   *
   * @param {int} time Time in seconds
   */
  set transitionTime(time) {
    this.attributes.transitionTime = Number(time) * 10;
  }

  /**
   * Set attributes
   *
   * @param {Object} attributes Attributes
   */
  setAttributes(attributes) {
    this.attributes = {};

    for (let key in attributes) {
      let attributeKey = key;
      if (key in ATTRIBUTE_MAP) {
        this.attributes[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }
  }

  /**
   * To string
   *
   * @return {string} Id
   */
  toString() {
    return this.id;
  }
}

/**
 * Validate scene
 *
 * @param {mixed} scene Scene object
 *
 * @return {bool} True if valid
 */
function validateScene(scene) {
  if (!(scene instanceof Scene)) {
    throw new Error({
      description: 'Expecting Scene'
    });
  }
}

module.exports = Scene;
