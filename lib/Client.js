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
    this.config    = Object.assign({}, DEFAULT_CONFIG, config);
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
   * Get lights accessor
   *
   * @return {mixed} Lights accessor
   */
  get lights() {
    return this.loadAccessor('Lights');
  }

  /**
   * Get groups accessor
   *
   * @return {mixed} Groups accessor
   */
  get groups() {
    return this.loadAccessor('Groups');
  }

  /**
   * Get schedules accessor
   *
   * @return {mixed} Schedules accessor
   */
  get schedules() {
    return this.loadAccessor('Schedules');
  }

  /**
   * Get sensors accessor
   *
   * @return {mixed} Sensors accessor
   */
  get sensors() {
    return this.loadAccessor('Sensors');
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
