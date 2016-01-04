'use strict';

let Attributes = require('./Attributes');

const DEFAULT_ATTRIBUTES = {
  'lights': []
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
   * @param {Object} attributes  Attributes
   * @param {Object} lightStates Light states
   */
  constructor(attributes, lightStates) {
    this.attributes  = new Attributes(attributes, DEFAULT_ATTRIBUTES);
    this.lightStates = new Attributes(lightStates);
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
    return this.attributes.get('lights');
  }

  /**
   * Set light ids
   *
   * @param {array} lights List of light ids or Light objects
   */
  set lightIds(lights) {
    let lightIds = lights.map(light => {
      return String(light);
    });

    this.attributes.set('lights', lightIds);
  }

  /**
   * Get owner
   *
   * @return {string} Owner
   */
  get owner() {
    return this.attributes.get('owner');
  }

  /**
   * Get recycle
   *
   * @return {boolean} True to recycle on limit, false to require delete
   */
  get recycle() {
    return this.attributes.get('recycle');
  }

  /**
   * Set recycle
   *
   * @param {boolean} value True to recycle on limit, false to require delete
   */
  set recycle(value) {
    this.attributes.set('recycle', Boolean(value));
  }

  /**
   * Is locked
   *
   * @return {boolean} True if locked and can't be deleted, false if not locked
   */
  get locked() {
    return Boolean(this.attributes.get('locked'));
  }

  /**
   * Get app data
   *
   * @return {Object} App data
   */
  get appData() {
    return this.attributes.get('appdata');
  }

  /**
   * Set app data
   *
   * @param {Object} data App data
   */
  set appData(data) {
    this.attributes.set('appdata', Object.assign({}, data));
  }

  /**
   * Get picture
   *
   * @return {string} Picture (reserved value)
   */
  get picture() {
    return this.attributes.get('picture');
  }

  /**
   * Get last updated
   *
   * @return {string} Last updated
   */
  get lastUpdated() {
    return this.attributes.get('lastupdated');
  }

  /**
   * Get version
   *
   * @return {int} Version
   */
  get version() {
    return this.attributes.get('version');
  }

  /**
   * Get capture light state
   *
   * @return {null} Null
   */
  get captureLightState() {
    return null;
  }

  /**
   * Set capture current light state
   *
   * @param {boolean} capture True to capture, false to not
   */
  set captureLightState(capture) {
    this.attributes.set('storelightstate', Boolean(capture));
  }

  /**
   * Get light state
   *
   * @param {string} lightId Light Id
   *
   * @return {mixed} Light state object, or undefined
   */
  getLightState(lightId) {
    return this.lightStates.get(String(lightId));
  }

  /**
   * Set light state
   *
   * @param {string} lightId Light Id
   * @param {Object} state   State
   */
  setLightState(lightId, state) {
    this.lightStates.set(String(lightId), state);
  }

  /**
   * Get transition time
   *
   * @return {null} Null
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
    this.attributes.set('transitiontime', Number(time) * 10);
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
