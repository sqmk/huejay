'use strict';

let Attributes        = require('./Attributes');
let GroupModelFactory = require('../GroupModel/Factory');

const DEFAULT_ATTRIBUTES = {
  'type':  'LightGroup',
  'lights': [],
};

/**
 * Group
 *
 * Group object
 */
class Group {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   * @param {Object} state      State
   */
  constructor(attributes, state) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
    this.state      = new Attributes(state);
  }

  /**
   * Get group id
   *
   * @return {string} Group id
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
   * Set type
   *
   * @param {string} type Type
   */
  set type(type) {
    this.attributes.set('type', String(type));
  }

  /**
   * Get class
   *
   * @return {string} Class
   */
  get class() {
    return this.attributes.get('class');
  }

  /**
   * Set class
   *
   * @return {string} typeClass Class
   */
  set class(typeClass) {
    this.attributes.set('class', String(typeClass));
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
   * Get model id
   *
   * @return {mixed} Model Id if available
   */
  get modelId() {
    return this.attributes.get('modelid');
  }

  /**
   * Get model
   *
   * Lazy loads model for the group
   *
   * @return {GroupModel} Group model
   */
  get model() {
    if (this.modelId !== undefined && this.groupModel === undefined) {
      this.groupModel = GroupModelFactory.createGroupModel(this.modelId);
    }

    return this.groupModel;
  }

  /**
   * Get unique Id
   *
   * @return {string} Unique Id
   */
  get uniqueId() {
    return this.attributes.get('uniqueid');
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
   * Get brightness
   *
   * @return {int} Brightness
   */
  get brightness() {
    return this.state.get('bri');
  }

  /**
   * Set brightness
   *
   * @param {int} brightness Brightness
   */
  set brightness(brightness) {
    this.state.set('bri', Number(brightness));
  }

  /**
   * Get color mode
   *
   * @return {string} Color mode
   */
  get colorMode() {
    return this.state.get('colormode');
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
    return this.state.get('sat');
  }

  /**
   * Set saturation
   *
   * @param {int} saturation Saturation
   */
  set saturation(saturation) {
    this.state.set('sat', Number(saturation));
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
    return this.state.get('ct');
  }

  /**
   * Set color temperature
   *
   * @param {int} temp Temperature
   */
  set colorTemp(temp) {
    this.state.set('ct', Number(temp));
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
   * Get scene
   *
   * @return {string} Scene
   */
  get scene() {
    return this.state.get('scene');
  }

  /**
   * Set scene
   *
   * @param {string} scene Scene
   */
  set scene(scene) {
    this.state.set('scene', String(scene));
  }

  /**
   * Get transition time
   *
   * @return {int} Transition time
   */
  get transitionTime() {
    return this.state.get('transitiontime') / 10;
  }

  /**
   * Set transition time
   *
   * @param {int} time Time in seconds
   */
  set transitionTime(time) {
    this.state.set('transitiontime', Number(time) * 10);
  }

  /**
   * Get increment brightness
   *
   * @return {int} Brightness increment amount
   */
  get incrementBrightness() {
    return this.state.get('bri_inc');
  }

  /**
   * Set increment brightness
   *
   * @param {int} amount Amount
   */
  set incrementBrightness(amount) {
    this.state.set('bri_inc', Number(amount));
  }

  /**
   * Get increment hue
   *
   * @return {int} Hue increment amount
   */
  get incrementHue() {
    return this.state.get('hue_inc');
  }

  /**
   * Set increment hue
   *
   * @param {int} amount Amount
   */
  set incrementHue(amount) {
    this.state.set('hue_inc', Number(amount));
  }

  /**
   * Get increment saturation
   *
   * @return {int} Saturation increment amount
   */
  get incrementSaturation() {
    return this.state.get('sat_inc');
  }

  /**
   * Set increment saturation
   *
   * @param {int} amount Amount
   */
  set incrementSaturation(amount) {
    this.state.set('sat_inc', Number(amount));
  }

  /**
   * Get increment XY
   *
   * @return {float} XY increment amount
   */
  get incrementXy() {
    return this.state.get('xy_inc');
  }

  /**
   * Set increment XY
   *
   * @param {float} amount Amount
   */
  set incrementXy(amount) {
    this.state.set('xy_inc', parseFloat(amount));
  }

  /**
   * Get increment color temp
   *
   * @return {int} Color temp increment amount
   */
  get incrementColorTemp() {
    return this.state.get('ct_inc');
  }

  /**
   * Set increment color temp
   *
   * @param {int} amount Amount
   */
  set incrementColorTemp(amount) {
    this.state.set('ct_inc', Number(amount));
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

module.exports = Group;
