'use strict';

let Error  = require('../../Error');
let Sensor = require('../../Model/Sensor');

const SENSOR_ATTRIBUTE_MAP = {
  'id':               'id',
  'name':             'name',
  'type':             'type',
  'modelid':          'modelId',
  'manufacturername': 'manufacturer',
  'swversion':        'softwareVersion',
  'uniqueid':         'uniqueId',
};

let utils = {};

/**
 * Validate sensor
 *
 * @param {mixed} sensor Sensor object
 *
 * @return {bool} True if valid
 */
utils.validateSensor = function (sensor) {
  if (sensor instanceof Sensor) {
    return true;
  }

  throw new Error({
    description: 'Expecting Sensor'
  });
}

/**
 * Build sensor
 *
 * @param {Object} result Result
 *
 * @return {Sensor} Sensor
 */
utils.buildSensor = function (result) {
  let attributes = this.mapSensorAttributes(result);
  let state      = this.mapSensorState(result.state);
  let config     = this.mapSensorConfig(result.config);

  return new Sensor(attributes, state, config);
};

/**
 * Map sensor attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapSensorAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key in result) {
      if (key in SENSOR_ATTRIBUTE_MAP) {
        attributes[SENSOR_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

/**
 * Map sensor state
 *
 * @param {Object} state State
 *
 * @return {Object} State
 */
utils.mapSensorState = function (state) {
  return Object.assign({}, state);
};

/**
 * Map sensor config
 *
 * @param {Object} config Config
 *
 * @return {Object} Config
 */
utils.mapSensorConfig = function (config) {
  return Object.assign({}, config);
};

module.exports = utils;
