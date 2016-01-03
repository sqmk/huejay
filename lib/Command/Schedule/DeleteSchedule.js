'use strict';

/**
 * Delete schedule command
 *
 * Delete a schedule by id
 */
class DeleteSchedule {
  /**
   * Constructor
   *
   * @param {string} scheduleId Schedule Id or Schedule object
   */
  constructor(scheduleId) {
    this.scheduleId = String(scheduleId);
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
      method: 'DELETE',
      url:    `api/${client.username}/schedules/${this.scheduleId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteSchedule;
