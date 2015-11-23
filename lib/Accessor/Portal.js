'use strict';

/**
 * Portal accessor
 */
class Portal {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get portal
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    let GetPortal = require('../Command/Portal/GetPortal');

    return this.client.invokeCommand(new GetPortal);
  }
}

module.exports = Portal;
