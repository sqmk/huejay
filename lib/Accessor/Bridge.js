'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let BridgeModel      = require('../Model/Bridge');

// Commands
let Ping             = require('../Command/Bridge/Ping');
let IsAuthenticated  = require('../Command/Bridge/IsAuthenticated');
let EnableLinkButton = require('../Command/Bridge/EnableLinkButton');
let EnableTouchlink  = require('../Command/Bridge/EnableTouchlink');
let GetBridge        = require('../Command/Bridge/GetBridge');
let SaveBridge       = require('../Command/Bridge/SaveBridge');

/**
 * Bridge accessor
 */
class Bridge extends AbstractAccessor {
  /**
   * Constructor
   *
   * @return {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Bridge = BridgeModel;
  }

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

  /**
   * Enable link button
   *
   * @return {Promise} Promise for chaining
   */
  linkButton() {
    return this.client.invokeCommand(new EnableLinkButton);
  }

  /**
   * Enable Touchlink
   *
   * @return {Promise} Promise for chaining
   */
  touchlink() {
    return this.client.invokeCommand(new EnableTouchlink);
  }
}

module.exports = Bridge;
