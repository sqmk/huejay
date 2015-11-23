'use strict';

let AbstractAccessor = require('./AbstractAccessor');

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
    let GetPortal = require('../Command/Portal/GetPortal');

    return this.client.invokeCommand(new GetPortal);
  }
}

module.exports = Portal;
