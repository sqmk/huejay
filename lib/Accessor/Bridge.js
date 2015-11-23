'use strict';

/**
 * Bridge accessor
 */
class Bridge {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Ping the bridge
   *
   * @return {Promise} Promise for chaining
   */
  ping() {
    let Ping = require('../Command/Bridge/Ping');

    return this.client.invokeCommand(new Ping);
  }

  /**
   * Get the bridge
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    let GetBridge = require('../Command/Bridge/GetBridge');

    return this.client.invokeCommand(new GetBridge);
  }

  /**
   * Save bridge
   *
   * @return {Promise} Promise for chaining
   */
  save(bridge) {
    let SaveBridge = require('../Command/Bridge/SaveBridge');

    return this.client.invokeCommand(new SaveBridge(bridge));
  }
}

module.exports = Bridge;
