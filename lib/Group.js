'use strict';

let Error = require('./Error');

const ATTRIBUTE_MAP = {
  'id':     'id',
  'name':   'name',
  'type':   'type',
  'lights': 'lights',
};

const STATE_MAP = {
  'on':             'on',
  'bri':            'brightness',
  'colormode':      'colorMode',
  'hue':            'hue',
  'sat':            'saturation',
  'xy':             'xy',
  'ct':             'colorTemp',
  'transitiontime': 'transitionTime',
  'alert':          'alert',
  'effect':         'effect',
  'scene':          'scene',
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
  constructor(id, attributes, state) {
    if (id != undefined) {
      attributes.id = id;
    }

    this.setAttributes(attributes);
    this.resetChangedAttributes();

    this.setState(state);
    this.resetChangedState();
  }

  /**
   * Validate group
   *
   * @param {Group} group Group
   */
  static validateGroup(group) {
    validateGroup(group);
  }

  /**
   * Get group id
   *
   * @return {string} Group id
   */
  get id() {
    return this.attributes.id;
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

    this.changedAttributes.push('name');
  }

  /**
   * Get type
   *
   * @return {string} Type
   */
  get type() {
    return this.attributes.type;
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

    this.changedAttributes.push('lights');
  }

  /**
   * Get on
   *
   * @return {bool} True if on, false if not
   */
  get on() {
    return Boolean(this.state.on);
  }

  /**
   * Set on
   *
   * @param {bool} value True for on, false if not
   */
  set on(value) {
    this.state.on = Boolean(value);

    this.changedState.push('on');
  }

  /**
   * Get brightness
   *
   * @return {int} Brightness
   */
  get brightness() {
    return this.state.brightness;
  }

  /**
   * Set brightness
   *
   * @param {int} brightness Brightness
   */
  set brightness(brightness) {
    this.state.brightness = Number(brightness);

    this.changedState.push('brightness');
  }

  /**
   * Get color mode
   *
   * @return {string} Color mode
   */
  get colorMode() {
    return this.state.colorMode;
  }

  /**
   * Get hue
   *
   * @return {int} Hue
   */
  get hue() {
    return this.state.hue;
  }

  /**
   * Set hue
   *
   * @param {int} hue Hue
   */
  set hue(hue) {
    this.state.hue = Number(hue);

    this.changedState.push('hue');
  }

  /**
   * Get saturation
   *
   * @return {int} Saturation
   */
  get saturation() {
    return this.state.saturation;
  }

  /**
   * Set saturation
   *
   * @param {int} saturation Saturation
   */
  set saturation(saturation) {
    this.state.saturation = Number(saturation);

    this.changedState.push('saturation');
  }

  /**
   * Get x/y
   *
   * @return {array} X/Y
   */
  get xy() {
    return this.state.xy;
  }

  /**
   * Set x/y
   *
   * @param {array} xy X/Y
   */
  set xy(xy) {
    this.state.xy = xy;

    this.changedState.push('xy');
  }

  /**
   * Get color temperature
   *
   * @return {int} Temperature
   */
  get colorTemp() {
    return this.state.colorTemp;
  }

  /**
   * Set color temperature
   *
   * @param {int} temp Temperature
   */
  set colorTemp(temp) {
    this.state.colorTemp = Number(temp);

    this.changedState.push('colorTemp');
  }

  /**
   * Get transition time
   *
   * @return {int} Transition time
   */
  get transitionTime() {
    return this.state.transitionTime / 10;
  }

  /**
   * Set transition time
   *
   * @param {int} time Time in seconds
   */
  set transitionTime(time) {
    this.state.transitionTime = Number(time) * 10;

    this.changedState.push('transitionTime');
  }

  /**
   * Get alert
   *
   * @return {string} Alert
   */
  get alert() {
    return this.state.alert;
  }

  /**
   * Set alert
   *
   * @param {string} mode Mode
   */
  set alert(mode) {
    this.state.alert = String(mode);

    this.changedState.push('alert');
  }

  /**
   * Get effect
   *
   * @return {string} Effect
   */
  get effect() {
    return this.state.effect;
  }

  /**
   * Set effect
   *
   * @param {string} effect Effect
   */
  set effect(effect) {
    this.state.effect = String(effect);

    this.changedState.push('effect');
  }

  /**
   * Get scene
   *
   * @return {string} Scene
   */
  get scene() {
    return this.state.scene;
  }

  /**
   * Set scene
   *
   * @param {string} scene Scene
   */
  set scene(scene) {
    this.state.scene = String(effect);

    this.changedState.push('scene');
  }

  /**
   * Set attributes
   *
   * @param {Object} attributes Attributes
   */
  setAttributes(attributes) {
    this.attributes = {};

    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        this.attributes[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }
  }

  /**
   * Get changed attributes
   *
   * @return {array} List of changed attributes
   */
  getChangedAttributes() {
    let changedAttributes = {};

    for (let key of this.changedAttributes) {
      changedAttributes[key] = this.attributes[key];
    }

    return changedAttributes;
  }

  /**
   * Reset changed values
   */
  resetChangedAttributes() {
    this.changedAttributes = [];
  }

  /**
   * Set state
   *
   * @param {Object} state State
   */
  setState(state) {
    this.state = {};

    for (let key in state) {
      if (key in STATE_MAP) {
        this.state[STATE_MAP[key]] = state[key];
      }
    }
  }

  /**
   * Get changed state
   *
   * @return {array} List of changed state
   */
  getChangedState() {
    let changedState = {};

    for (let key of this.changedState) {
      changedState[key] = this.state[key];
    }

    return changedState;
  }

  /**
   * Reset changed state
   */
  resetChangedState() {
    this.changedState = [];
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
 * Validate group
 *
 * @param {mixed} group Group object
 *
 * @return {bool} True if valid
 */
function validateGroup(group) {
  if (!(group instanceof Group)) {
    throw Error({
      description: 'Expecting Group'
    });
  }
}

module.exports = Group;
