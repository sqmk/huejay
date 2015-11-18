'use strict';

const ATTRIBUTE_MAP = {
  'id':               'id',
  'name':             'name',
  'type':             'type',
  'modelid':          'modelId',
  'manufacturername': 'manufacturer',
  'swversion':        'softwareVersion',
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
    attributes.id = id;

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
   * Get model id
   *
   * @return {string} Model Id
   */
  get modelId() {
    return this.attributes.modelId;
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
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.softwareVersion;
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
