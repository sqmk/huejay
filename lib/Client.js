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
   * Ping bridge
   *
   * @return {Promise} Promise for chaining
   */
  ping() {
    let Ping = require('./Command/Ping');

    return this.invokeCommand(new Ping);
  }

  /**
   * Get bridge
   *
   * @return {Promise} Promise for chaining
   */
  getBridge() {
    let GetBridge = require('./Command/GetBridge');

    return this.invokeCommand(new GetBridge);
  }

  /**
   * Save bridge
   *
   * @param {mixed} bridge Bridge
   *
   * @return {Promise} Promise for chaining
   */
  saveBridge(bridge) {
    let SaveBridge = require('./Command/SaveBridge');

    return this.invokeCommand(new SaveBridge(bridge));
  }

  /**
   * Get portal
   *
   * @return {Promise} Promise for chaining
   */
  getPortal() {
    let GetPortal = require('./Command/GetPortal');

    return this.invokeCommand(new GetPortal);
  }

  /**
   * Get software update
   *
   * @return {Promise} Promise for chaining
   */
  getSoftwareUpdate() {
    let GetSoftwareUpdate = require('./Command/GetSoftwareUpdate');

    return this.invokeCommand(new GetSoftwareUpdate);
  }

  /**
   * Check for software updates
   *
   * @return {Promise} Promise for chaining
   */
  checkForSoftwareUpdates() {
    let CheckForSoftwareUpdates = require('./Command/CheckForSoftwareUpdates');

    return this.invokeCommand(new CheckForSoftwareUpdates);
  }

  /**
   * Disable install notification
   *
   * @return {Promise} Promise for chaining
   */
  disableInstallNotification() {
    let DisableInstallNotification = require('./Command/DisableInstallNotification');

    return this.invokeCommand(new DisableInstallNotification);
  }

  /**
   * Install software updates
   *
   * @return {Promise} Promise for chaining
   */
  installSoftwareUpdates() {
    let InstallSoftwareUpdates = require('./Command/InstallSoftwareUpdates');

    return this.invokeCommand(new InstallSoftwareUpdates);
  }

  /**
   * Is authenticated
   *
   * @return {Promise} Promise for chaining
   */
  isAuthenticated() {
    let IsAuthenticated = require('./Command/IsAuthenticated');

    return this.invokeCommand(new IsAuthenticated);
  }

  /**
   * Get users
   *
   * @return {Promise} Promise for chaining
   */
  getUsers() {
    let GetUsers = require('./Command/GetUsers');

    return this.invokeCommand(new GetUsers);
  }

  /**
   * Get user
   *
   * @param {mixed} username Username or User object
   *
   * @return {Promise} Promise for chaining
   */
  getUser(username) {
    if (username === undefined) {
      username = this.username;
    }

    let GetUser = require('./Command/GetUser');

    return this.invokeCommand(new GetUser(username));
  }

  /**
   * Create user
   *
   * @param {string} deviceType Device type (optional)
   *
   * @return {Promise} Promise for chaining
   */
  createUser(deviceType) {
    let CreateUser = require('./Command/CreateUser');

    return this.invokeCommand(new CreateUser(deviceType));
  }

  /**
   * Delete user
   *
   * @param {mixed} username Username or User object
   *
   * @return {Promise} Promise for chaining
   */
  deleteUser(username) {
    let DeleteUser = require('./Command/DeleteUser');

    return this.invokeCommand(new DeleteUser(username));
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
   * Get time zones
   *
   * @return {Promise} Promise for chaining
   */
  getTimeZones() {
    let GetTimeZones = require('./Command/GetTimeZones');

    return this.invokeCommand(new GetTimeZones);
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
