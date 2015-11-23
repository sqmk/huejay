'use strict';

let AbstractAccessor = require('./AbstractAccessor');

/**
 * Bridge accessor
 */
class Bridge extends AbstractAccessor {
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
   * Is authenticated
   *
   * @return {Promise} Promise for chaining
   */
  isAuthenticated() {
    let IsAuthenticated = require('../Command/Bridge/IsAuthenticated');

    return this.client.invokeCommand(new IsAuthenticated);
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
