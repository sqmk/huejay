'use strict';

let Schedule = require('../../Model/Schedule');

/**
 * Get schedules command
 *
 * Get a list of schedules
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
      path: `api/${client.username}/schedules`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(scheduleId => {
          return new Schedule(scheduleId, result[scheduleId]);
        })
      });
  }
}

module.exports = GetSchedules;
