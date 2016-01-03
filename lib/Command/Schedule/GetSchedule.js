'use strict';

let Utils = require('./Utils');

/**
 * Get schedule command
 *
 * Get a schedule by id
 */
class GetSchedule {
  /**
   * Constructor
   *
   * @param {int} scheduleId Schedule Id
   */
  constructor(scheduleId) {
    this.scheduleId = Number(scheduleId);
  }

  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/schedules/${this.scheduleId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.scheduleId;

        return Utils.buildSchedule(result);
      });
  }
}

module.exports = GetSchedule;
