'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'description',
  'command',
  'localtime',
  'status',
  'autodelete'
];

/**
 * Save schedule command
 *
 * Save a schedule
 */
class SaveSchedule {
  /**
   * Constructor
   *
   * @param {Schedule} schedule Schedule
   */
  constructor(schedule) {
    Utils.validateSchedule(schedule);

    this.schedule = schedule;
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
      method: 'PUT',
      url:    `api/${client.username}/schedules/${this.schedule.id}`,
      data:   {}
    };

    Utils.convertAction(this.schedule, client);

    let attributes = this.schedule.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.schedule.attributes.resetChanged();

        return this.schedule;
      });
  }
}

module.exports = SaveSchedule;
