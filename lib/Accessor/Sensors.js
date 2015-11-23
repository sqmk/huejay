'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Sensor           = require('../Model/Sensor');

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
    let StartSensorScan = require('../Command/Sensor/StartSensorScan');

    return this.client.invokeCommand(new StartSensorScan);
  }

  /**
   * Get new sensors
   *
   * @return {Promise} Promise for chaining
   */
  getNew() {
    let GetNewSensors = require('../Command/Sensor/GetNewSensors');

    return this.client.invokeCommand(new GetNewSensors);
  }

  /**
   * Get all sensors
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    let GetSensors = require('../Command/Sensor/GetSensors');

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
    let GetSensor = require('../Command/Sensor/GetSensor');

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
    let CreateSensor = require('../Command/Sensor/CreateSensor');

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
    let SaveSensor       = require('../Command/Sensor/SaveSensor');
    let SaveSensorState  = require('../Command/Sensor/SaveSensorState');
    let SaveSensorConfig = require('../Command/Sensor/SaveSensorConfig');

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
    let DeleteSensor = require('../Command/Sensor/DeleteSensor');

    return this.client.invokeCommand(new DeleteSensor(sensor));
  }
}

module.exports = Sensors;
