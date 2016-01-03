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
 * Create schedule command
 *
 * Create a schedule
 */
class CreateSchedule {
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
      method: 'POST',
      url:    `api/${client.username}/schedules`,
      data:   {}
    };

    Utils.convertAction(this.schedule, client);

    let attributes = this.schedule.attributes.getAll();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.schedule.attributes.resetChanged();

        this.schedule.attributes.replace({
          id: result.id
        });

        return this.schedule;
      });
  }
}

module.exports = CreateSchedule;
