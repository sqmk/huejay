'use strict';

const ATTRIBUTE_MAP = {
  'id':               'id',
  'name':             'name',
  'type':             'type',
  'modelid':          'modelId',
  'manufacturername': 'manufacturer',
  'swversion':        'softwareVersion',
  'uniqueid':         'uniqueId',
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
   * @param {string} id         Id
   * @param {Object} attributes Attribtues
   * @param {Object} state      State
   * @param {Object} config     Config
   */
  constructor(id, attributes, state, config) {
    if (id != undefined) {
      attributes.id = id;
    }

    this.stateObj  = Object.assign({}, state);
    this.configObj = Object.assign({}, config);

    this.setAttributes(attributes);
  }

  /**
   * Validate sensor
   *
   * @param {Sensor} sensor Sensor
   */
  static validateSensor(sensor) {
    validateSensor(sensor);
  }

  /**
   * Get Id
   *
   * @return {string} Id
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
   * Set type
   *
   * @param {string} type Type
   */
  set type(type) {
    this.attributes.type = String(type);
  }

  /**
   * Get model id
   *
   * @return {string} Model Id
   */
  get modelId() {
    return this.attributes.modelId;
  }

  /**
   * Set model id
   *
   * @param {string} modelId Model Id
   */
  set modelId(modelId) {
    this.attributes.modelId = String(modelId);
  }

  /**
   * Get manufacturer
   *
   * @return {string} Manufacturer
   */
  get manufacturer() {
    return this.attributes.manufacturer;
  }

  /**
   * Set manufacturer
   *
   * @param {string} manufacturer Manufacturer
   */
  set manufacturer(manufacturer) {
    this.attributes.manufacturer = String(manufacturer);
  }

  /**
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.softwareVersion;
  }

  /**
   * Set software version
   *
   * @param {string} softwareVersion Software version
   */
  set softwareVersion(softwareVersion) {
    this.attributes.softwareVersion = String(softwareVersion);
  }

  /**
   * Get unique Id
   *
   * @return {string} Unique Id
   */
  get uniqueId() {
    return this.attributes.uniqueId;
  }

  /**
   * Set unique Id
   *
   * @param {string} uniqueId Unique Id
   */
  set uniqueId(uniqueId) {
    this.attributes.uniqueId = String(uniqueId);
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
   * To string
   *
   * @return {string} Id
   */
  toString() {
    return this.id;
  }
}

/**
 * Validate sensor
 *
 * @param {mixed} sensor Sensor object
 */
function validateSensor(sensor) {
  if (!(sensor instanceof Sensor)) {
    throw new Error({
      description: 'Expecting Sensor'
    });
  }
}

module.exports = Sensor;
