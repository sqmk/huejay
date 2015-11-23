'use strict';

let AbstractAccessor = require('./AbstractAccessor');

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
    let GetTimeZones = require('../Command/TimeZone/GetTimeZones');

    return this.client.invokeCommand(new GetTimeZones);
  }
}

module.exports = TimeZones;
