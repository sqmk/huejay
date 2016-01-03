'use strict';

let Utils = require('./Utils');

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
      url: `api/${client.username}/schedules`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(scheduleId => {
          result[scheduleId].id = scheduleId;

          return Utils.buildSchedule(result[scheduleId]);
        })
      });
  }
}

module.exports = GetSchedules;
