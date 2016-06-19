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
   * @param {Object} action     Action
   */
  constructor(attributes, state, action) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
    this.state      = new Attributes(state);
    this.action     = new Attributes(action);
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
    return Boolean(this.action.get('on'));
  }

  /**
   * Set on
   *
   * @param {bool} value True for on, false if not
   */
  set on(value) {
    this.action.set('on', Boolean(value));
  }

  /**
   * Get brightness
   *
   * @return {int} Brightness
   */
  get brightness() {
    return this.action.get('bri');
  }

  /**
   * Set brightness
   *
   * @param {int} brightness Brightness
   */
  set brightness(brightness) {
    this.action.set('bri', Number(brightness));
  }

  /**
   * Get color mode
   *
   * @return {string} Color mode
   */
  get colorMode() {
    return this.action.get('colormode');
  }

  /**
   * Get hue
   *
   * @return {int} Hue
   */
  get hue() {
    return this.action.get('hue');
  }

  /**
   * Set hue
   *
   * @param {int} hue Hue
   */
  set hue(hue) {
    this.action.set('hue', Number(hue));
  }

  /**
   * Get saturation
   *
   * @return {int} Saturation
   */
  get saturation() {
    return this.action.get('sat');
  }

  /**
   * Set saturation
   *
   * @param {int} saturation Saturation
   */
  set saturation(saturation) {
    this.action.set('sat', Number(saturation));
  }

  /**
   * Get x/y
   *
   * @return {array} X/Y
   */
  get xy() {
    return this.action.get('xy');
  }

  /**
   * Set x/y
   *
   * @param {array} xy X/Y
   */
  set xy(xy) {
    this.action.set('xy', xy);
  }

  /**
   * Get color temperature
   *
   * @return {int} Temperature
   */
  get colorTemp() {
    return this.action.get('ct');
  }

  /**
   * Set color temperature
   *
   * @param {int} temp Temperature
   */
  set colorTemp(temp) {
    this.action.set('ct', Number(temp));
  }

  /**
   * Get alert
   *
   * @return {string} Alert
   */
  get alert() {
    return this.action.get('alert');
  }

  /**
   * Set alert
   *
   * @param {string} mode Mode
   */
  set alert(mode) {
    this.action.set('alert', String(mode));
  }

  /**
   * Get effect
   *
   * @return {string} Effect
   */
  get effect() {
    return this.action.get('effect');
  }

  /**
   * Set effect
   *
   * @param {string} effect Effect
   */
  set effect(effect) {
    this.action.set('effect', String(effect));
  }

  /**
   * Get scene
   *
   * @return {string} Scene
   */
  get scene() {
    return this.action.get('scene');
  }

  /**
   * Set scene
   *
   * @param {string} scene Scene
   */
  set scene(scene) {
    this.action.set('scene', String(scene));
  }

  /**
   * Get transition time
   *
   * @return {int} Transition time
   */
  get transitionTime() {
    return this.action.get('transitiontime') / 10;
  }

  /**
   * Set transition time
   *
   * @param {int} time Time in seconds
   */
  set transitionTime(time) {
    this.action.set('transitiontime', Number(time) * 10);
  }

  /**
   * Get increment brightness
   *
   * @return {int} Brightness increment amount
   */
  get incrementBrightness() {
    return this.action.get('bri_inc');
  }

  /**
   * Set increment brightness
   *
   * @param {int} amount Amount
   */
  set incrementBrightness(amount) {
    this.action.set('bri_inc', Number(amount));
  }

  /**
   * Get increment hue
   *
   * @return {int} Hue increment amount
   */
  get incrementHue() {
    return this.action.get('hue_inc');
  }

  /**
   * Set increment hue
   *
   * @param {int} amount Amount
   */
  set incrementHue(amount) {
    this.action.set('hue_inc', Number(amount));
  }

  /**
   * Get increment saturation
   *
   * @return {int} Saturation increment amount
   */
  get incrementSaturation() {
    return this.action.get('sat_inc');
  }

  /**
   * Set increment saturation
   *
   * @param {int} amount Amount
   */
  set incrementSaturation(amount) {
    this.action.set('sat_inc', Number(amount));
  }

  /**
   * Get increment XY
   *
   * @return {float} XY increment amount
   */
  get incrementXy() {
    return this.action.get('xy_inc');
  }

  /**
   * Set increment XY
   *
   * @param {float} amount Amount
   */
  set incrementXy(amount) {
    this.action.set('xy_inc', parseFloat(amount));
  }

  /**
   * Get increment color temp
   *
   * @return {int} Color temp increment amount
   */
  get incrementColorTemp() {
    return this.action.get('ct_inc');
  }

  /**
   * Set increment color temp
   *
   * @param {int} amount Amount
   */
  set incrementColorTemp(amount) {
    this.action.set('ct_inc', Number(amount));
  }

  /**
   * Any lights on in group?
   *
   * @return {bool} True if any lights are on in the group, false if not
   */
  get anyOn() {
    return this.state.get('any_on');
  }

  /**
   * All lights on in group?
   *
   * @return {bool} True if all lights are on in the group, false if not
   */
  get allOn() {
    return this.state.get('all_on');
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
