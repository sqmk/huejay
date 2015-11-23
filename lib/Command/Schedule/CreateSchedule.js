'use strict';

let Action   = require('../../Model/Action');
let Schedule = require('../../Model/Schedule');

const ATTRIBUTE_MAP = {
  'name':        'name',
  'description': 'description',
  'command':     'command',
  'localTime':   'localtime',
  'status':      'status',
  'autoDelete':  'autodelete',
};

/**
 * Create schedule command
 *
 * Create a schedule
 */
class CreateSchedule {
  /**
   * Constructor
   *
   * @param {Schedule} schedule    Schedule
   * @param {mixed}    model       Model
   * @param {mixed}    filterState Filter state (optional)
   */
  constructor(schedule, model, filterState) {
    Schedule.validateSchedule(schedule);

    this.schedule    = schedule;
    this.model       = model;
    this.filterState = filterState;
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
      path:   `api/${client.username}/schedules`,
      body:   {}
    };

    for (let key in this.schedule.attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = this.schedule.attributes[key];
      }
    }

    if (this.model !== undefined) {
      let action = new Action(this.model, this.filterState);

      options.body.command = action.buildCommand(client, true);
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.schedule.attributes.id      = result.id;
        this.schedule.attributes.command = options.body.command;

        return this.schedule;
      });
  }
}

module.exports = CreateSchedule;
