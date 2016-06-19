'use strict';

let Attributes         = require('./Attributes');
let SensorModelFactory = require('../SensorModel/Factory');
let SensorTypeFactory  = require('../SensorType/Factory');

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
   * @param {Object} config     Config
   * @param {Object} state      State
   */
  constructor(attributes, config, state) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);

    this.reloadConfigAndState(config, state);
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

    this.reloadConfigAndState(
      this.config.attributes.getAll(),
      this.state.attributes.getAll()
    );
  }

  /**
   * Get model id
   *
   * @return {string} Model Id
   */
  get modelId() {
    return this.attributes.get('modelid');
  }

  /**
   * Set model id
   *
   * @param {string} modelId Model Id
   */
  set modelId(modelId) {
    this.attributes.set('modelid', String(modelId));

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
    return this.attributes.get('manufacturername');
  }

  /**
   * Set manufacturer
   *
   * @param {string} manufacturer Manufacturer
   */
  set manufacturer(manufacturer) {
    this.attributes.set('manufacturername', String(manufacturer));
  }

  /**
   * Get product id
   *
   * @return {string} Product Id
   */
  get productId() {
    return this.attributes.get('productid');
  }

  /**
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.get('swversion');
  }

  /**
   * Set software version
   *
   * @param {string} softwareVersion Software version
   */
  set softwareVersion(softwareVersion) {
    this.attributes.set('swversion', String(softwareVersion));
  }

  /**
   * Get software config id
   *
   * @return {string} Software config id
   */
  get softwareConfigId() {
    return this.attributes.get('swconfigid');
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
   * Set unique Id
   *
   * @param {string} uniqueId Unique Id
   */
  set uniqueId(uniqueId) {
    this.attributes.set('uniqueid', String(uniqueId));
  }

  /**
   * Reload config and state
   *
   * @param {Object} config Config
   * @param {Object} state  State
   */
  reloadConfigAndState(config, state) {
    this.config = SensorTypeFactory.createSensorConfig(this.type, config);
    this.state  = SensorTypeFactory.createSensorState(this.type, state);
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
