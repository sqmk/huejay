'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Commands
let GetInternetServices = require('../Command/InternetServices/GetInternetServices');

/**
 * Internet services accessor
 */
class InternetServices extends AbstractAccessor {
  /**
   * Get internet services
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    return this.client.invokeCommand(new GetInternetServices);
  }
}

module.exports = InternetServices;
