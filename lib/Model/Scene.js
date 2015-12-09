'use strict';

let Attributes = require('./Attributes');

const DEFAULT_ATTRIBUTES = {
  'lightIds': []
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
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
  }

  /**
   * Get id
   *
   * @return {string} Id
   */
  get id() {
    return this.attributes.get('id');
  }

  /**
   * Set id
   *
   * @param {string} id Id
   */
  set id(id) {
    this.attributes.set('id', String(id));
  }

  /**
   * Get name
   *
   * @return {string} Name
   */
  get name() {
    return this.attributes.get('name');
  }

  /**
   * Set name
   *
   * @param {string} name Name
   */
  set name(name) {
    this.attributes.set('name', String(name));
  }

  /**
   * Get light ids
   *
   * @return {array} List of light ids
   */
  get lightIds() {
    return this.attributes.get('lightIds');
  }

  /**
   * Set light ids
   *
   * @param {array} lights List of light ids or Light objects
   */
  set lightIds(lights) {
    let lightIds = []

    for (let i in lights) {
      lightIds.push(String(lights[i]));
    }

    this.attributes.set('lightIds', lightIds);
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
    this.attributes.set('transitionTime', Number(time) * 10);
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

module.exports = Scene;
