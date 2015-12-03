'use strict';

let Error = require('../Error');
let Group = require('./Group');
let Light = require('./Light');

/**
 * Action
 *
 * Action object
 */
class Action {
  /**
   * Constructor
   *
   * @param {mixed}  model       Model
   * @param {array}  filterState Filter state
   */
  constructor(model, filterState) {
    validateModel(model);

    this.model       = model;
    this.filterState = filterState;
  }

  /**
   * Build command
   *
   * @param {Client} client Client
   *
   * @return {Object} Action values
   */
  buildCommand(client, includeUsername) {
    let command = {
      method:  'PUT',
      address: includeUsername === true ? `/api/${client.username}` : '',
      body:    {}
    };

    if (this.filterState !== undefined) {
      for (let key in this.filterState) {
        command.body[this.filterState[key]] = this.model.state.get(this.filterState[key]);
      }
    } else {
      command.body = this.model.state.getAll();
    }

    if (this.model instanceof Light) {
      command.address += `/lights/${this.model.id}/state`;
    } else if (this.model instanceof Group) {
      command.address += `/groups/${this.model.id}/action`;
    }

    return command;
  }
}

/**
 * Validate model (either light or group)
 *
 * @param {mixed} model Model
 */
function validateModel(model) {
  if (model instanceof Light) {
    return;
  }

  if (model instanceof Group) {
    return;
  }

  throw new Error({
    description: 'Expecting either Light or Group'
  });
}

module.exports = Action;
