'use strict';

/**
 * Client
 *
 * Serves as client to the bridge
 */
class Client {
  /**
   * Constructor
   *
   * @param {string} host     Host
   * @param {string} username Username (optional)
   */
  constructor(host, username) {
    this.config = {};
    this.host   = host;

    if (username !== undefined) {
      this.username = username;
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
   * Update bridge
   *
   * @param {mixed} bridge Bridge
   *
   * @return {Promise} Promise for chaining
   */
  updateBridge(bridge) {
    let UpdateBridge = require('./Command/UpdateBridge');

    return this.invokeCommand(new UpdateBridge(bridge));
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
