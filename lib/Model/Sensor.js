'use strict';

let Attributes         = require('./Attributes');
let SensorModelFactory = require('../SensorModel/Factory');

const DEFAULT_ATTRIBUTES = {
  'type': 'CLIPGenericStatus',
};

/**
 * Sensor
 *
 * Sensor object
 */
class Sensor {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   * @param {Object} state      State
   * @param {Object} config     Config
   */
  constructor(attributes, state, config) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
    this.stateObj   = Object.assign({}, state);
    this.configObj  = Object.assign({}, config);
  }

  /**
   * Get Id
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
   * Get model id
   *
   * @return {string} Model Id
   */
  get modelId() {
    return this.attributes.get('modelId');
  }

  /**
   * Set model id
   *
   * @param {string} modelId Model Id
   */
  set modelId(modelId) {
    this.attributes.set('modelId', String(modelId));

    delete this.sensorModel;
  }

  /**
   * Get model
   *
   * Lazy loads model for the sensor
   *
   * @return {SensorModel} Sensor model
   */
  get model() {
    if (this.sensorModel === undefined) {
      this.sensorModel = SensorModelFactory.createSensorModel(this.modelId);
    }

    return this.sensorModel;
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
   * Set manufacturer
   *
   * @param {string} manufacturer Manufacturer
   */
  set manufacturer(manufacturer) {
    this.attributes.set('manufacturer', String(manufacturer));
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
   * Set software version
   *
   * @param {string} softwareVersion Software version
   */
  set softwareVersion(softwareVersion) {
    this.attributes.set('softwareVersion', String(softwareVersion));
  }

  /**
   * Get unique Id
   *
   * @return {string} Unique Id
   */
  get uniqueId() {
    return this.attributes.get('uniqueId');
  }

  /**
   * Set unique Id
   *
   * @param {string} uniqueId Unique Id
   */
  set uniqueId(uniqueId) {
    this.attributes.set('uniqueId', String(uniqueId));
  }

  /**
   * Get state
   *
   * @return {Object} State
   */
  get state() {
    return this.stateObj;
  }

  /**
   * Get config
   *
   * @return {Object} Config
   */
  get config() {
    return this.configObj;
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

module.exports = Sensor;
