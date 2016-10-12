'use strict';

let Schedules = require('../../CapabilityModel/Schedules');

/**
 * Get schedules command
 */
class GetSchedules {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/capabilities`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new Schedules(result.schedules);
      });
  }
}

module.exports = GetSchedules;
