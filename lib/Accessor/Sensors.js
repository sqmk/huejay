'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Sensor           = require('../Model/Sensor');

// Commands
let StartSensorScan  = require('../Command/Sensor/StartSensorScan');
let GetNewSensors    = require('../Command/Sensor/GetNewSensors');
let GetSensors       = require('../Command/Sensor/GetSensors');
let GetSensor        = require('../Command/Sensor/GetSensor');
let CreateSensor     = require('../Command/Sensor/CreateSensor');
let SaveSensor       = require('../Command/Sensor/SaveSensor');
let SaveSensorState  = require('../Command/Sensor/SaveSensorState');
let SaveSensorConfig = require('../Command/Sensor/SaveSensorConfig');
let DeleteSensor     = require('../Command/Sensor/DeleteSensor');

/**
 * Sensors accessor
 */
class Sensors extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Sensor = Sensor;
  }

  /**
   * Scan for new sensors
   *
   * @return {Promise} Promise for chaining
   */
  scan() {
    return this.client.invokeCommand(new StartSensorScan);
  }

  /**
   * Get new sensors
   *
   * @return {Promise} Promise for chaining
   */
  getNew() {
    return this.client.invokeCommand(new GetNewSensors);
  }

  /**
   * Get all sensors
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    return this.client.invokeCommand(new GetSensors);
  }

  /**
   * Get sensor by id
   *
   * @param {mixed} id Sensor Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(id) {
    return this.client.invokeCommand(new GetSensor(id));
  }

  /**
   * Create sensor
   *
   * @param {Sensor} sensor Sensor
   *
   * @return {Promise} Promise for chaining
   */
  create(sensor) {
    return this.client.invokeCommand(new CreateSensor(sensor));
  }

  /**
   * Save sensor
   *
   * @param {Sensor} sensor Sensor
   *
   * @return {Promise} Promise for chaining
   */
  save(sensor) {
    return Promise.all([
      this.client.invokeCommand(new SaveSensor(sensor)),
      this.client.invokeCommand(new SaveSensorState(sensor)),
      this.client.invokeCommand(new SaveSensorConfig(sensor))
    ]).then(() => {
      return sensor;
    });
  }

  /**
   * Delete sensor
   *
   * @param {mixed} sensor Sensor object or sensor id
   *
   * @return {Promise} Promise for chaining
   */
  delete(sensor) {
    return this.client.invokeCommand(new DeleteSensor(sensor));
  }
}

module.exports = Sensors;
