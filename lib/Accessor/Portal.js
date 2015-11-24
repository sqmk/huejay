'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Commands
let GetPortal = require('../Command/Portal/GetPortal');

/**
 * Portal accessor
 */
class Portal extends AbstractAccessor {
  /**
   * Get portal
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    return this.client.invokeCommand(new GetPortal);
  }
}

module.exports = Portal;
