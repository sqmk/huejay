'use strict';

let Attributes        = require('./Attributes');
let LightModelFactory = require('../LightModel/Factory');

/**
 * Light
 *
 * Light object
 */
class Light {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   * @param {Object} state      State
   */
  constructor(attributes, state) {
    this.attributes = new Attributes(attributes);
    this.state      = new Attributes(state);
  }

  /**
   * Get light id
   *
   * @return {string} Light id
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
   * Get type
   *
   * @return {string} Type
   */
  get type() {
    return this.attributes.get('type');
  }

  /**
   * Get unique id
   *
   * @return {string} Unique id
   */
  get uniqueId() {
    return this.attributes.get('uniqueId');
  }

  /**
   * Get manufacturer
   *
   * @return {string} Manufacturer
   */
  get manufacturer() {
    return this.attributes.get('manufacturer');
  }

  /**
   * Get model id
   *
   * @return {string} Model id
   */
  get modelId() {
    return this.attributes.get('modelId');
  }

  /**
   * Get model
   *
   * Lazy loads model for the light
   *
   * @return {LightModel} Light model
   */
  get model() {
    if (this.lightModel === undefined) {
      this.lightModel = LightModelFactory.createLightModel(this.modelId);
    }

    return this.lightModel;
  }

  /**
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.get('softwareVersion');
  }

  /**
   * Get on
   *
   * @return {bool} True if on, false if not
   */
  get on() {
    return Boolean(this.state.get('on'));
  }

  /**
   * Set on
   *
   * @param {bool} value True for on, false if not
   */
  set on(value) {
    this.state.set('on', Boolean(value));
  }

  /**
   * Get reachable
   *
   * @return {bool} Reachable
   */
  get reachable() {
    return this.state.get('reachable');
  }

  /**
   * Get brightness
   *
   * @return {int} Brightness
   */
  get brightness() {
    return this.state.get('brightness');
  }

  /**
   * Set brightness
   *
   * @param {int} brightness Brightness
   */
  set brightness(brightness) {
    this.state.set('brightness', Number(brightness));
  }

  /**
   * Get color mode
   *
   * @return {string} Color mode
   */
  get colorMode() {
    return this.state.get('colorMode');
  }

  /**
   * Get hue
   *
   * @return {int} Hue
   */
  get hue() {
    return this.state.get('hue');
  }

  /**
   * Set hue
   *
   * @param {int} hue Hue
   */
  set hue(hue) {
    this.state.set('hue', Number(hue));
  }

  /**
   * Get saturation
   *
   * @return {int} Saturation
   */
  get saturation() {
    return this.state.get('saturation');
  }

  /**
   * Set saturation
   *
   * @param {int} saturation Saturation
   */
  set saturation(saturation) {
    this.state.set('saturation', Number(saturation));
  }

  /**
   * Get x/y
   *
   * @return {array} X/Y
   */
  get xy() {
    return this.state.get('xy');
  }

  /**
   * Set x/y
   *
   * @param {array} xy X/Y
   */
  set xy(xy) {
    this.state.set('xy', xy);
  }

  /**
   * Get color temperature
   *
   * @return {int} Temperature
   */
  get colorTemp() {
    return this.state.get('colorTemp');
  }

  /**
   * Set color temperature
   *
   * @param {int} temp Temperature
   */
  set colorTemp(temp) {
    this.state.set('colorTemp', Number(temp));
  }

  /**
   * Get alert
   *
   * @return {string} Alert
   */
  get alert() {
    return this.state.get('alert');
  }

  /**
   * Set alert
   *
   * @param {string} mode Mode
   */
  set alert(mode) {
    this.state.set('alert', String(mode));
  }

  /**
   * Get effect
   *
   * @return {string} Effect
   */
  get effect() {
    return this.state.get('effect');
  }

  /**
   * Set effect
   *
   * @param {string} effect Effect
   */
  set effect(effect) {
    this.state.set('effect', String(effect));
  }

  /**
   * Get transition time
   *
   * @return {int} Transition time
   */
  get transitionTime() {
    return this.state.get('transitionTime') / 10;
  }

  /**
   * Set transition time
   *
   * @param {int} time Time in seconds
   */
  set transitionTime(time) {
    this.state.set('transitionTime', Number(time) * 10);
  }

  /**
   * Get increment brightness
   *
   * @return {int} Brightness increment amount
   */
  get incrementBrightness() {
    return this.state.get('incrementBrightness');
  }

  /**
   * Set increment brightness
   *
   * @param {int} amount Amount
   */
  set incrementBrightness(amount) {
    this.state.set('incrementBrightness', Number(amount));
  }

  /**
   * Get increment hue
   *
   * @return {int} Hue increment amount
   */
  get incrementHue() {
    return this.state.get('incrementHue');
  }

  /**
   * Set increment hue
   *
   * @param {int} amount Amount
   */
  set incrementHue(amount) {
    this.state.set('incrementHue', Number(amount));
  }

  /**
   * Get increment saturation
   *
   * @return {int} Saturation increment amount
   */
  get incrementSaturation() {
    return this.state.get('incrementSaturation');
  }

  /**
   * Set increment saturation
   *
   * @param {int} amount Amount
   */
  set incrementSaturation(amount) {
    this.state.set('incrementSaturation', Number(amount));
  }

  /**
   * Get increment XY
   *
   * @return {float} XY increment amount
   */
  get incrementXy() {
    return this.state.get('incrementXy');
  }

  /**
   * Set increment XY
   *
   * @param {float} amount Amount
   */
  set incrementXy(amount) {
    this.state.set('incrementXy', parseFloat(amount));
  }

  /**
   * Get increment color temp
   *
   * @return {int} Color temp increment amount
   */
  get incrementColorTemp() {
    return this.state.get('incrementColorTemp');
  }

  /**
   * Set increment color temp
   *
   * @param {int} amount Amount
   */
  set incrementColorTemp(amount) {
    this.state.set('incrementColorTemp', Number(amount));
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

module.exports = Light;
