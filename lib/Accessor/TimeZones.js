'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Commands
let GetTimeZones = require('../Command/TimeZone/GetTimeZones');

/**
 * Time zones accessor
 */
class TimeZones extends AbstractAccessor {
  /**
   * Get all time zones
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    return this.client.invokeCommand(new GetTimeZones);
  }
}

module.exports = TimeZones;
