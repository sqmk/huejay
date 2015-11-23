'use strict';

/**
 * Time zones accessor
 */
class TimeZones {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    this.client = client;
  }

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
