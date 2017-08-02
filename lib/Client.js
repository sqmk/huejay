'use strict';

const DEFAULT_CONFIG = {
  host:     undefined,
  port:     80,
  username: undefined,
  timeout:  15000,
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
   * Get port
   *
   * @return {int} Port
   */
  get port() {
    return this.config.port;
  }

  /**
   * Set port
   *
   * @param {int} port Port
   */
  set port(port) {
    this.config.port = Number(port);
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
   * @param {string} username Username
   */
  set username(username) {
    this.config.username = username;
  }

  /**
   * Get timeout
   *
   * @return {int} Timeout
   */
  get timeout() {
    return this.config.timeout;
  }

  /**
   * Set timeout
   *
   * @param {int} timeout Timeout
   */
  set timeout(timeout) {
    this.config.timeout = Number(timeout);
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
   * Get internet services
   *
   * @return {mixed} Internet services accessor
   */
  get internetServices() {
    return this.loadAccessor('InternetServices');
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
   * Get scenes accessor
   *
   * @return {mixed} Scenes accessor
   */
  get scenes() {
    return this.loadAccessor('Scenes');
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
   * Get actions accessor
   *
   * @return {mixed} Actions accessor
   */
  get actions() {
    return this.loadAccessor('Actions');
  }

  /**
   * Get time patterns accessor
   *
   * @return {mixed} Time patterns accessor
   */
  get timePatterns() {
    return this.loadAccessor('TimePatterns');
  }

  /**
   * Get resource links accessor
   *
   * @return {mixed} Resource links accessor
   */
  get resourceLinks() {
    return this.loadAccessor('ResourceLinks');
  }

  /**
   * Get capabilities accessor
   * 
   * @return {mixed} Capabilities accessor
   */
  get capabilities() {
    return this.loadAccessor('Capabilities');
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
