'use strict';

let Schedule = require('../Schedule');
let Light    = require('../Light');
let Group    = require('../Group');
let Error    = require('../Error');

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
    validateModel(model);

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

    options.body.command = this.buildCommand(client);

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.schedule.attributes.id      = result.id;
        this.schedule.attributes.command = options.body.command;

        return this.schedule;
      });
  }

  /**
   * Build command
   *
   * @param {Client} client Client
   *
   * @return {Object} Command
   */
  buildCommand(client) {
    let command = {
      method:  'PUT',
      address: `/api/${client.username}/`,
      body:    {}
    };

    if (this.filterState !== undefined) {
      for (let key in this.filterState) {
        command.body[this.filterState[key]] = this.model.state[this.filterState[key]];
      }
    } else {
      command.body = this.model.state;
    }


    if (this.model instanceof Light) {
      command.address += `lights/${this.model.id}/state`;
    } else if (this.model instanceof Group) {
      command.address += `groups/${this.model.id}/action`;
    }

    return command;
  }
}

/**
 * Validate model
 *
 * @param {mixed} model Model
 */
function validateModel(model) {
  if (model === undefined) {
    return;
  }

  if (!(model instanceof Light) && !(model instanceof Group)) {
    throw new Error({
      description: 'Expecting Light or Group'
    });
  }
}

module.exports = CreateSchedule;
