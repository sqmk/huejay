'use strict';

const DEFAULT_CONFIG = {
  host:     undefined,
  username: undefined,
};

/**
 * Client
 *
 * Serves as client to the bridge
 */
class Client {
  /**
   * Constructor
   *
   * @param {Object} config Configuration
   */
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config);

    for (let key in config) {
      this[key] = config[key];
    }

    this.accessors = {};
  }

  /**
   * Get host
   *
   * @return {string} Host
   */
  get host() {
    return this.config.host;
  }

  /**
   * Set host
   *
   * @param {string} host Host
   */
  set host(host) {
    this.config.host = host;
  }

  /**
   * Get username
   *
   * @return {string} Username
   */
  get username() {
    return this.config.username;
  }

  /**
   * Set username
   *
   * @param  {string} username Username
   */
  set username(username) {
    this.config.username = username;
  }

  /**
   * Start light scan
   *
   * @return {Promise} Promise for chaining
   */
  startLightScan() {
    let StartLightScan = require('./Command/StartLightScan');

    return this.invokeCommand(new StartLightScan);
  }

  /**
   * Get new lights
   *
   * @return {Promise} Promise for chaining
   */
  getNewLights() {
    let GetNewLights = require('./Command/GetNewLights');

    return this.invokeCommand(new GetNewLights);
  }

  /**
   * Get lights
   *
   * @return {Promise} Promise for chaining
   */
  getLights() {
    let GetLights = require('./Command/GetLights');

    return this.invokeCommand(new GetLights);
  }

  /**
   * Get light
   *
   * @param {mixed} lightId Light Id
   *
   * @return {Promise} Promise for chaining
   */
  getLight(lightId) {
    let GetLight = require('./Command/GetLight');

    return this.invokeCommand(new GetLight(lightId));
  }

  /**
   * Save light
   *
   * @param {Light} light Light
   *
   * @return {Promise} Promise for chaining
   */
  saveLight(light) {
    let SaveLight      = require('./Command/SaveLight');
    let SaveLightState = require('./Command/SaveLightState');

    return Promise.all([
      this.invokeCommand(new SaveLight(light)),
      this.invokeCommand(new SaveLightState(light))
    ]).then(() => {
      return light;
    });
  }

  /**
   * Delete light
   *
   * @param {mixed} light Light object or light id
   *
   * @return {Promise} Promise for chaining
   */
  deleteLight(light) {
    let DeleteLight = require('./Command/DeleteLight');

    return this.invokeCommand(new DeleteLight(light));
  }

  /**
   * Get groups
   *
   * @return {Promise} Promise for chaining
   */
  getGroups() {
    let GetGroups = require('./Command/GetGroups');

    return this.invokeCommand(new GetGroups);
  }

  /**
   * Get group
   *
   * @param {mixed} groupId Group Id
   *
   * @return {Promise} Promise for chaining
   */
  getGroup(groupId) {
    let GetGroup = require('./Command/GetGroup');

    return this.invokeCommand(new GetGroup(groupId));
  }

  /**
   * Create group
   *
   * @param {Group} group Group
   *
   * @return {Promise} Promise for chaining
   */
  createGroup(group) {
    let CreateGroup = require('./Command/CreateGroup');

    return this.invokeCommand(new CreateGroup(group));
  }

  /**
   * Save group
   *
   * @param {Group} group Group
   *
   * @return {Promise} Promise for chaining
   */
  saveGroup(group) {
    let SaveGroup      = require('./Command/SaveGroup');
    let SaveGroupState = require('./Command/SaveGroupState');

    return Promise.all([
      this.invokeCommand(new SaveGroup(group)),
      this.invokeCommand(new SaveGroupState(group))
    ]).then(() => {
      return group;
    });
  }

  /**
   * Delete group
   *
   * @param {Group} group Group object or group Id
   *
   * @return {Promise} Promise for chaining
   */
  deleteGroup(group) {
    let DeleteGroup = require('./Command/DeleteGroup');

    return this.invokeCommand(new DeleteGroup(group));
  }

  /**
   * Get scenes
   *
   * @return {Promise} Promise for chaining
   */
  getScenes() {
    let GetScenes = require('./Command/GetScenes');

    return this.invokeCommand(new GetScenes);
  }

  /**
   * Create scene
   *
   * @param {Scene} scene Scene
   *
   * @return {Promise} Promise for chaining
   */
  createScene(scene) {
    let CreateScene = require('./Command/CreateScene');

    return this.invokeCommand(new CreateScene(scene));
  }

  /**
   * Save scene light state
   *
   * @param {mixed} scene       Scene object or scene id
   * @param {Light} light       Light
   * @param {Array} filterState Filter state (optional)
   *
   * @return {Promise} Promise for chaining
   */
  saveSceneLightState(scene, light, filterState) {
    let SaveSceneLightState = require('./Command/SaveSceneLightState');

    return this.invokeCommand(
      new SaveSceneLightState(scene, light, filterState)
    );
  }

  /**
   * Get schedules
   *
   * @return {Promise} Promise for chaining
   */
  getSchedules() {
    let GetSchedules = require('./Command/GetSchedules');

    return this.invokeCommand(new GetSchedules);
  }

  /**
   * Get schedule
   *
   * @param {mixed} scheduleId Schedule Id
   *
   * @return {Promise} Promise for chaining
   */
  getSchedule(scheduleId) {
    let GetSchedule = require('./Command/GetSchedule');

    return this.invokeCommand(new GetSchedule(scheduleId));
  }

  /**
   * Create schedule
   *
   * @param {Schedule} schedule    Schedule
   * @param {mixed}    model       Model
   * @param {Array}    filterState Filter state (optional)
   *
   * @return {Promise} Promise for chaining
   */
  createSchedule(schedule, model, filterState) {
    let CreateSchedule = require('./Command/CreateSchedule');

    return this.invokeCommand(
      new CreateSchedule(schedule, model, filterState)
    );
  }

  /**
   * Save schedule
   *
   * @param {Schedule} schedule    Schedule
   * @param {mixed}    model       Model
   * @param {Array}    filterState Filter state (optional)
   *
   * @return {Promise} Promise for chaining
   */
  saveSchedule(schedule, model, filterState) {
    let SaveSchedule = require('./Command/SaveSchedule');

    return this.invokeCommand(
      new SaveSchedule(schedule, model, filterState)
    );
  }

  /**
   * Delete schedule
   *
   * @param {mixed} Schedule object or schedule Id
   *
   * @return {Promise} Promise for chaining
   */
  deleteSchedule(schedule) {
    let DeleteSchedule = require('./Command/DeleteSchedule');

    return this.invokeCommand(new DeleteSchedule(schedule));
  }

  /**
   * Start sensor scan
   *
   * @return {Promise} Promise for chaining
   */
  startSensorScan() {
    let StartSensorScan = require('./Command/StartSensorScan');

    return this.invokeCommand(new StartSensorScan);
  }

  /**
   * Get new sensors
   *
   * @return {Promise} Promise for chaining
   */
  getNewSensors() {
    let GetNewSensors = require('./Command/GetNewSensors');

    return this.invokeCommand(new GetNewSensors);
  }

  /**
   * Get sensors
   *
   * @return {Promise} Promise for chaining
   */
  getSensors() {
    let GetSensors = require('./Command/GetSensors');

    return this.invokeCommand(new GetSensors);
  }

  /**
   * Get sensor
   *
   * @param {mixed} sensorId Sensor Id
   *
   * @return {Promise} Promise for chaining
   */
  getSensor(sensorId) {
    let GetSensor = require('./Command/GetSensor');

    return this.invokeCommand(new GetSensor(sensorId));
  }

  /**
   * Create sensor
   *
   * @param {mixed} sensor Sensor
   *
   * @return {Promise} Promise for chaining
   */
  createSensor(sensor) {
    let CreateSensor = require('./Command/CreateSensor');

    return this.invokeCommand(new CreateSensor(sensor));
  }

  /**
   * Save sensor
   *
   * @param {Sensor} sensor Sensor
   *
   * @return {Promise} Promise for chaining
   */
  saveSensor(sensor) {
    let SaveSensor       = require('./Command/SaveSensor');
    let SaveSensorState  = require('./Command/SaveSensorState');
    let SaveSensorConfig = require('./Command/SaveSensorConfig');

    return Promise.all([
      this.invokeCommand(new SaveSensor(sensor)),
      this.invokeCommand(new SaveSensorState(sensor)),
      this.invokeCommand(new SaveSensorConfig(sensor))
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
  deleteSensor(sensor) {
    let DeleteSensor = require('./Command/DeleteSensor');

    return this.invokeCommand(new DeleteSensor(sensor));
  }

  /**
   * Get bridge accessor
   *
   * @return {mixed} Bridge accessor
   */
  get bridge() {
    return this.loadAccessor('Bridge');
  }

  /**
   * Get portal accessor
   *
   * @return {mixed} Portal accessor
   */
  get portal() {
    return this.loadAccessor('Portal');
  }

  /**
   * Get sofware update accessor
   *
   * @return {mixed} Software update accessor
   */
  get softwareUpdate() {
    return this.loadAccessor('SoftwareUpdate');
  }

  /**
   * Get users accessor
   *
   * @return {mixed} Users accessor
   */
  get users() {
    return this.loadAccessor('Users');
  }

  /**
   * Get rules accessor
   *
   * @return {mixed} Rules accessor
   */
  get rules() {
    return this.loadAccessor('Rules');
  }

  /**
   * Get time zones accessor
   *
   * @return {mixed} Time zones accessor
   */
  get timeZones() {
    return this.loadAccessor('TimeZones');
  }

  /**
   * Load accessor
   *
   * @param {string} accessor Accessor name
   *
   * @return {mixed} Accessor
   */
  loadAccessor(accessor) {
    if (!this.accessors[accessor]) {
      let Accessor = require(`./Accessor/${accessor}`);

      this.accessors[accessor] = new Accessor(this);
    }

    return this.accessors[accessor];
  }

  /**
   * Get transport
   *
   * @return {Transport} Transport (http)
   */
  getTransport() {
    if (this.transport === undefined) {
      let Transport = new require('./Transport');

      this.transport = new Transport(this);
    }

    return this.transport;
  }

  /**
   * Invoke command
   *
   * @param {mixed} command Command
   *
   * @return {mixed} Result from command
   */
  invokeCommand(command) {
    return command.invoke(this);
  }
}

module.exports = Client;
