'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Ping             = require('../Command/Bridge/Ping');
let IsAuthenticated  = require('../Command/Bridge/IsAuthenticated');
let GetBridge        = require('../Command/Bridge/GetBridge');
let SaveBridge       = require('../Command/Bridge/SaveBridge');

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
    return this.client.invokeCommand(new Ping);
  }

  /**
   * Is authenticated
   *
   * @return {Promise} Promise for chaining
   */
  isAuthenticated() {
    return this.client.invokeCommand(new IsAuthenticated);
  }

  /**
   * Get the bridge
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    return this.client.invokeCommand(new GetBridge);
  }

  /**
   * Save bridge
   *
   * @return {Promise} Promise for chaining
   */
  save(bridge) {
    return this.client.invokeCommand(new SaveBridge(bridge));
  }
}

module.exports = Bridge;
